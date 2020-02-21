import { useEffect, useState } from "react";


/*

Feed this method a username and get the image url.

Use:

function InstagramImage() {
  const [loading, src] = useInstagramUserImage( USERNAME );
  return (<img src={src} />);
}

*/


export default function useInstagramUserImage(username = "stac_attak") {
  const [source, setSource] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    async function getUrl(username) {
      const endpoint = `https://www.instagram.com/${username}/?__a=1`;
      const response = await fetch(endpoint);
      const instaUser = await response.json();

      setSource(instaUser.graphql.user.profile_pic_url);

      setLoading(false);
    }

    if (username.length > 0) getUrl(username);
  }, [username]);

  return [loading, source];
}
