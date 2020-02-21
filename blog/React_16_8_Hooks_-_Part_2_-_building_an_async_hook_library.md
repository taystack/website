# React 16.8 Hooks - Part 2 - building an async hook library

![](https://i.ebayimg.com/images/g/iKsAAMXQ~6VQ4HXr/s-l1600.jpg)

In the last part, [React 16.8 Hooks - Part 1,](https://github.com/taystack/website/issues/2) we touched on a simple async hook to gather github user information and return the url for their avatar. In this example I'll discuss the process behind building a library of dedicated hooks and how they can work together to make a seamless interface. We will expand on the `useGithubAvatar` and abstract a few key pieces for use with other hooks of a similar nature.

## Using a global for settings

`useGithubAvatar.js` expects a single argument `username`. What if we can set this at the top-level of a 3rd-party app? I would expect something like the following to be available:

```javascript
import UseGithub from "@taystack/useGithub";
UseGithub.setUsername("taystack");

// ReactDOM.render ...
```

In JavaScript, we now have the useful accessor `global` for this type of thing. Let's make our source file `src/useGithub.js`;

```javascript
// If global.UseGithub exists, return it. Otherwise return a `new GlobalUseGithub()`
export default (global.UseGithub || global.UseGithub = new GlobalUseGithub());

// Prototype of the global. We may modify this later.
// Take note of the global.users hash - we will use this for cacheing later.
function GlobalUseGithub() { this.username = ""; this.endpoints = {}; }

// Define a very simple validation method for username
GlobalUseGithub.prototype.validateUsername = function(username) {
  if (typeof username !== "string") throw new Error("useGithub expects string for username");
  if (username.length === 0) throw new Error("useGithub username cannot be blank");

  // Set the username on the global
  this.username = username;
}

// Set the global username
GlobalUseGithub.prototype.setUsername = function(username) {
  GlobalUseGithub.validateUsername(username);

  // Set the username on the global
  this.username = username;
}
```

This is the bare-minimum boilerplate needed to grow legs to this project. You can always use a `class GlobalUseGithub {}` instead of `function GlobalUseGithub() {}` for your implementation. For the purpose of this exercise, this is exactly what we wanted to do; Expose a global and allow properties to be applied to it. Now we can go ahead and change the `useGithubAvatar` hook to use our new global.

```javascript
// useGithubAvatar.js

import UseGithub from "./useGithub"; // Get or Set/Get the global
import useGithubUser from "./useGithubUser"; // Separate hook with another job


// We can have our global username used if no username is provided
export default function useGithubAvatar(username = UseGithub.username) {

  // Nesting the money hook here...
  const [loading, user] = useGithubUser(username);
}
```

That was simple. We have a global keeping track of our username. This is important for the next step `useGithubUser(username)`;

Modify `useGithub.js` with the following methods so we can cache the used endpoints.
```javascript
GlobalUseGithub.prototype.updateEndpoint = function(endpoint, user) {
  this.endpoints[endpoint] = user;
}
GlobalUseGithub.prototype.hasEndpoint = function(username) {
  return Object.keys(this.endpoints).indexOf(username) >= 0;
}
```

We can almost start making requests. Let's set up the framework for doing that next.
We need to define a new method `useGithubFetch` that will get an arbitrary github api endpoint. We will use this method for any user-related requests.

```javascript
// useGithubFetch.js
import UseGithub from "./useGithub";

export const GITHUB_API_URL = "https://api.github.com";

export default function useGithubFetch(path) {
  const [loading, setLoading] = useState(true);

  // When the path changes...
  useEffect(() => {
    // Show we kicked-off a request
    setLoading(true);
    async function doFetch(url) {

      // Fetch the arbitrary endpoint
      const response = await fetch()
      const data = await response.json();
      setLoading(false);
    }
  }, [path]);
}

// -----------------------------------------------------
// useGithubUser.js
import UseGithub from "./useGithub";

// This hook is where we will point at the thing that does the heavy lifting.
// This will grab our user and return it with a boolean detailing load-state.
export default function useGithubUser(username = UseGithub.username) {
  UseGithub.validateUsername(username); // Stack-trace the error

  const [loading, user] = useGithubFecth(`/`);

  useEffect(() => {
    if (!loading && Object.keys(user).length > 0) {
      UseGithub.updateUser(username, user);
    }
  }, [loading]);

  return [loading, user];
}
```
