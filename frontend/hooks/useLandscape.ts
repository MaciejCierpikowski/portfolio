import { useState, useEffect, useRef } from "react";
import { useWindowResize } from "./useWindowResize";

export const useLandscape = () => {
  const windowSize = useWindowResize();

  const [orientation, setOrientation] = useState<string>();

  useEffect(() => {
    window.addEventListener(
      "orientationchange",
      function () {
        setOrientation(
          Number(window.orientation) === 90 ? "landscape" : "portrait"
        );
      },
      false
    );
  }, [windowSize]);

  return orientation;
};
