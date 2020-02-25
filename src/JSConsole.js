import { setIssues, setShowBlogView } from "./redux/Actions";
import resumeText from "./assets/Resume.txt";
import resumePdf from "./assets/Resume.pdf";


const issues = [
  {
    "url": "https://api.github.com/repos/taystack/website/issues/2",
    "repository_url": "https://api.github.com/repos/taystack/website",
    "labels_url": "https://api.github.com/repos/taystack/website/issues/2/labels{/name}",
    "comments_url": "https://api.github.com/repos/taystack/website/issues/2/comments",
    "events_url": "https://api.github.com/repos/taystack/website/issues/2/events",
    "html_url": "https://github.com/taystack/website/issues/2",
    "id": 567489111,
    "node_id": "MDU6SXNzdWU1Njc0ODkxMTE=",
    "number": 2,
    "title": "React 16.8 Hooks - Part 1",
    "user": {
      "login": "taystack",
      "id": 2994672,
      "node_id": "MDQ6VXNlcjI5OTQ2NzI=",
      "avatar_url": "https://avatars3.githubusercontent.com/u/2994672?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/taystack",
      "html_url": "https://github.com/taystack",
      "followers_url": "https://api.github.com/users/taystack/followers",
      "following_url": "https://api.github.com/users/taystack/following{/other_user}",
      "gists_url": "https://api.github.com/users/taystack/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/taystack/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/taystack/subscriptions",
      "organizations_url": "https://api.github.com/users/taystack/orgs",
      "repos_url": "https://api.github.com/users/taystack/repos",
      "events_url": "https://api.github.com/users/taystack/events{/privacy}",
      "received_events_url": "https://api.github.com/users/taystack/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 1862568240,
        "node_id": "MDU6TGFiZWwxODYyNTY4MjQw",
        "url": "https://api.github.com/repos/taystack/website/labels/Blog",
        "name": "Blog",
        "color": "2c77c1",
        "default": false,
        "description": "Experimental blog format"
      },
      {
        "id": 1857140877,
        "node_id": "MDU6TGFiZWwxODU3MTQwODc3",
        "url": "https://api.github.com/repos/taystack/website/labels/Front%20end",
        "name": "Front end",
        "color": "864ff2",
        "default": false,
        "description": "Front end engineering related"
      },
      {
        "id": 1863029269,
        "node_id": "MDU6TGFiZWwxODYzMDI5MjY5",
        "url": "https://api.github.com/repos/taystack/website/labels/JavaScript",
        "name": "JavaScript",
        "color": "a4e871",
        "default": false,
        "description": "JavaScript related content"
      },
      {
        "id": 1857141593,
        "node_id": "MDU6TGFiZWwxODU3MTQxNTkz",
        "url": "https://api.github.com/repos/taystack/website/labels/React%2016.8+",
        "name": "React 16.8+",
        "color": "35ceba",
        "default": false,
        "description": "React v16.8+ content included"
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": {
      "login": "taystack",
      "id": 2994672,
      "node_id": "MDQ6VXNlcjI5OTQ2NzI=",
      "avatar_url": "https://avatars3.githubusercontent.com/u/2994672?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/taystack",
      "html_url": "https://github.com/taystack",
      "followers_url": "https://api.github.com/users/taystack/followers",
      "following_url": "https://api.github.com/users/taystack/following{/other_user}",
      "gists_url": "https://api.github.com/users/taystack/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/taystack/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/taystack/subscriptions",
      "organizations_url": "https://api.github.com/users/taystack/orgs",
      "repos_url": "https://api.github.com/users/taystack/repos",
      "events_url": "https://api.github.com/users/taystack/events{/privacy}",
      "received_events_url": "https://api.github.com/users/taystack/received_events",
      "type": "User",
      "site_admin": false
    },
    "assignees": [
      {
        "login": "taystack",
        "id": 2994672,
        "node_id": "MDQ6VXNlcjI5OTQ2NzI=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/2994672?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/taystack",
        "html_url": "https://github.com/taystack",
        "followers_url": "https://api.github.com/users/taystack/followers",
        "following_url": "https://api.github.com/users/taystack/following{/other_user}",
        "gists_url": "https://api.github.com/users/taystack/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/taystack/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/taystack/subscriptions",
        "organizations_url": "https://api.github.com/users/taystack/orgs",
        "repos_url": "https://api.github.com/users/taystack/repos",
        "events_url": "https://api.github.com/users/taystack/events{/privacy}",
        "received_events_url": "https://api.github.com/users/taystack/received_events",
        "type": "User",
        "site_admin": false
      }
    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2020-02-19T11:03:09Z",
    "updated_at": "2020-02-21T20:51:09Z",
    "closed_at": null,
    "author_association": "OWNER",
    "body": "# React 16.8 Hooks - Part 1\r\n\r\n\r\n![](http://clipart-library.com/images_k/fly-fishing-silhouette-clip-art/fly-fishing-silhouette-clip-art-1.png)\r\n\r\n\r\n\r\nThe release of `React 16.8` gave us a [few extra tools](https://reactjs.org/docs/hooks-intro.html) to help optimize render speed and easily maintain state. Specifically, **hooks** provide a way for `React` to decide when the DOM needs to be updated.\r\n\r\nYou might say, \"Dude, we have that already.\" And I would say, \"correct, but not like this.\"\r\n\r\n## Example task:\r\n\r\n - Create an input UI where we capitalize every word the user inputs.\r\n \r\nLet's take a look at a very simple, **stateful** `React pre 16.8` component.\r\n\r\n```javascript\r\nclass Example {\r\n\r\n  constructor(props) {\r\n    super(props); // boilerplate...\r\n\r\n    // initialize the state count\r\n    this.state = { text: \"\" };\r\n\r\n    // bind the change method\r\n    this.handleChange = this.handleChange.bind(this);\r\n  }\r\n\r\n  handleChange(event) {\r\n    const text = event.target.value.split(\" \").map(capitalize).join(\" \");\r\n    setState({ text });\r\n  }\r\n\r\n  render() {\r\n    return <><input onChange={this.handleChange} />{this.state.text}</>\r\n  }\r\n}\r\n```\r\n\r\nNow, let's take a look at the same component in `React 16.8`:\r\n\r\nFirst lets make a file called `useCapitalizedWords.js` and put it in a folder called `hooks`\r\n\r\n```javascript\r\n// hooks/useCapitalizedWords.js\r\n\r\nimport { useEffect, useState } from \"react\";\r\nimport { capitalize } from \"helpers\";\r\n\r\nexport default function useCapitalizedWords() {\r\n  // stateful text\r\n  const [text, setText] = useState(\"\");\r\n\r\n  // When text changes\r\n  useEffect(() => {\r\n    // Update the stored text with capitalized words\r\n    setText(text.split(\" \").map(capitalize).join(\" \"));\r\n  }, [text]);\r\n\r\n  return [text, setText, text.split(\" \")];\r\n}\r\n```\r\n\r\nNow all we have to do is use our hook.\r\n\r\n```javascript\r\n// Example.js\r\n\r\nimport useCapitalizedWords from \"hooks/useCapitalizedWords\";\r\n\r\n\r\nfunction Example() {\r\n  // Initialize count to zero\r\n  const [text, setText, words] = useCapitalizedWords();\r\n\r\n  return (<><input onChange={event => setText(event.target.value)} />{text}</>);\r\n}\r\n```\r\n\r\nI don't know about you, but I would rather maintain that last example. A simple **stateful** component should look as simple as it is. That was too easy. Lets try something a bit more difficult.\r\n\r\n## Example task 2 - `async` hook\r\n\r\nLet's make a UI component that grabs my github avatar. We start with a fresh hook `useGithubAvatar`.\r\n\r\n```javascript\r\n// hooks/useGithubAvatar.js\r\n\r\nfunction useGithubAvatar(username = \"taystack\") {\r\n  // Store the url\r\n  const [url, setUrl] = useState(\"\");\r\n\r\n  // Good UI always knows when a resource is loading\r\n  const [loading, setLoading] = useState(false);\r\n\r\n  // When username changes...\r\n  useEffect(() => {\r\n\r\n    // Have an async method in scope of the effect\r\n    async function getUser(username) {\r\n      setLoading(true);                   // Update loading boolean\r\n      // Get the user\r\n      const userResponse = await fetch(`https://api.github.com/users/${username}`);\r\n\r\n      /* You can change the next lines to:\r\n      const user = awaitUserResponse.json(); <- just capture the entire user\r\n      setUser(user); <- change [url, setUrl] = useState(\"\") to [user, setUser] = useState({});\r\n          I would also recommend changing the name of the hook to \"useGithubUser\"\r\n      */ \r\n      const { avatar_url } = await userResponse.json();\r\n      setUrl(avatar_url);          // Update returned URL string\r\n      setLoading(false);                  // Update loading boolean \r\n    }\r\n\r\n    getUser(username);\r\n  }, [username]);\r\n\r\n  return [loading, url];\r\n}\r\n```\r\n\r\nNow when I want to get an avatar url for a user, I just invoke my custom hook! This component below will begin to appear after `100ms` and gradually transition opacity over the next `100ms`. \r\n\r\n```javascript\r\nconst GithubAvatar = ({ username, ...props }) => {\r\n  const [loading, src] = useGithubAvatar(username);\r\n  return (<img {...props} src={src} style={{ opacity: loading ? 0 : 1, transition: \"opacity 100ms 100ms\" }} />);\r\n}\r\nGithubAvatar.defaultProps = { username: \"taystack\" };\r\n```\r\n\r\nI'm leaving it here for **React 16.8 Hooks Part 1**\r\n\r\n> If you have any questions or complaints about the code I wrote, please leave a comment below.\r\n\r\nI hope to inspire you into writing your own hooks. Hooks contribute to functional-style programming, which is a good thing. Like the example above shows, `<GithubAvatar />` has one job - show the avatar. Even without `props.username` it knows what to do, explicitly. Same goes for `useGithubAvatar`. You can expect that hook to return an array of `[bool, string]`. I will create an exercise on `try {} catch() {}` for this hook in a later post.\r\n\r\nFunctional programming techniques like hooks allow developers to separate concerns of the view (rendered material), and the logic of how to get there. When modularized concerns are clearly defined, functional logic becomes much easier to maintain, debug, and contribute to. \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"
  }
];


export default (global.Taylor || (global.Taylor = new Taylor()));


function Taylor() {
  const licenseUrl = "https://raw.githubusercontent.com/taystack/website/master/LICENSE"
  const issuesUrl = "https://api.github.com/repos/taystack/website/issues?tags=Blog";

  setTimeout(() => {
    console.log("Hey, welcome to the JavaScript console. I've left a global here.");
    console.log("Try typing 'Taylor'")
  }, 1000);

  this.showResume = async function getResume(type = "text") {
    const resume = await ({
      text: handleResumeText,
      pdf: handleResumePdf,
    })[type]();
    console.log(resume);
  }

  this.downloadResume = async function downloadResume(type = "pdf") {
    const resume = await ({
      text: handleResumeDownloadText,
      pdf: handleResumeDownloadPdf,
    })[type]();
  }

  this.getLicense = async function() {
    const response = await fetch(licenseUrl);
    const text = await response.text();
    console.log(text);
  }

  this.getBlogLinks = async function getBlogLinks() {
    // const response = await fetch(issuesUrl);
    // const issues = await response.json();

    // let text = "I'm trying to be more involved in development communities. Here are some things I think are good:\n";

    // issues.forEach(issue => {
    //   text += "\n";
    //   text += issue.title + "\n";
    //   text += issue.html_url + "\n";
    //   text += issue.labels.map(tag => tag.name).join(" | ") + "\n";
    //   text += "\n";
    // });
    // console.log(text);

    this.dispatch(setIssues(issues));
    this.dispatch(setShowBlogView(true));
  }

  this.startEmail = function startEmail(body = "If this was a scavenger hunt, I found the thing.") {
    const subject = "7334 user found this link";
    const email = "tay.stack+console_7334_auto@gmail.com";
    const link = `mailto:${email}?subject=${subject}&body=${body}`;
    window.open(link, "_blank");
  };

  this.setDispatch = function setDispatch(dispatch) { this.dispatch = dispatch; }

  async function handleResumeText() {
    const response = await fetch(resumeText);
    return response.text();
  }

  async function handleResumePdf() {
    const response = await fetch(resumePdf);
    return response.text();
  }

  async function handleResumeDownloadText() {
    initDownload(resumeText);
  }

  async function handleResumeDownloadPdf() {
    initDownload(resumePdf);
  }

  function initDownload(source) {
    const aTag = document.createElement("a");
    aTag.href = source;
    aTag.setAttribute("href", source);
    aTag.setAttribute("target", "_blank");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
}
