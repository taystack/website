import { useMemo, useEffect, useRef, useState } from "react";


export default function useImageInView(scrollY, test) {
  const ref = useRef();
  const [loaded, setLoaded] = useState(false);
  const [show, setShow] = useState(false);

  // Memoize the distance of the image from the top of the body
  // When loaded changes...
  const fromTop = useMemo(() => {
    // If loaded becomes true...
    if (loaded) {
      // Get the dimensions of the image via our ref
      const rect = ref.current.getBoundingClientRect(),
      // Get the offset of the window currently.
      scrollTop = window.pageYOffset;
      // Return the sum
      return rect.top + scrollTop;
    }
  }, [loaded]);

  useEffect(() => {
    if (loaded) {
      const { innerHeight } = window;
      setShow((innerHeight + scrollY + 100) > fromTop);
    }
  }, [scrollY, loaded]);

  return [ref, show, setLoaded];
}
