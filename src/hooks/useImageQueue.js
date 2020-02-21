import { useEffect, useState } from "react";
import { queueImage, dequeueImage } from "../redux/Actions";


export default function useImageQueue(dispatch, src) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (src && src.length) {
      if (loaded) dispatch(dequeueImage(src));
      else dispatch(queueImage(src));
    }
  }, [loaded, src]);

  return [loaded, setLoaded];
}
