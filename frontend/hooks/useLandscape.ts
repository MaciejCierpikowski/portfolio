import { useState, useEffect, useRef } from "react";
import { useWindowResize } from "./useWindowResize";

export const useLandscape = () => {
  const isLandscape = () =>
    window.matchMedia("(orientation:landscape)").matches;
  const windowSize = useWindowResize();

  const [orientation, setOrientation] = useState(
    isLandscape() ? "landscape" : "portrait"
  );
  const timeout = useRef<any>();

  const onWindowResize = () => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setOrientation(isLandscape() ? "landscape" : "portrait");
    }, 50);
  };

  useEffect(() => {
    onWindowResize();
  }, [windowSize]);

  return orientation;
};
