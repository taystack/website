import { useEffect, useState } from "react";


/*

Feed this method a username and get the image url.

Use:

function InstagramImage() {
  const [loading, src] = useInstagramUserImage( USERNAME );
  return (<img src={src} />);
}

*/


export default function useInstagramUserImage(username = "stac_attak", fallbackSource = "https://placekitten.com/g/50/50") {
  const [source, setSource] = useState("");
  const [loading, setLoading] = useState(true);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function getUrl(username) {
      try {
        const endpoint = `https://www.instagram.com/${username}/?__a=1`;
        const response = await fetch(endpoint);

        // Need auth from insta just handle all errors with fallback though
        // if (response.redirected) {
        //   setFallback(true);
        //   return;
        // }

        // We're all good
        const instaUser = await response.json();
        setSource(instaUser.graphql.user.profile_pic_url);

      } catch (e) {
        // Just, whatever
        setFallback(true);
      }


      setLoading(false);
    }

    if (username.length > 0) getUrl(username);
  }, [username]);

  // If fallback changes to true
  useEffect(() => {
    if (fallback) setSource(fallbackSource);
  }, [fallback]);

  return [loading, source];
}
