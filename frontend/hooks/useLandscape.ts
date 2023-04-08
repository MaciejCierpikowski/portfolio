import { useState, useEffect, useRef } from "react";
import { useWindowResize } from "./useWindowResize";

export const useLandscape = () => {
  const windowSize = useWindowResize();

  const [orientation, setOrientation] = useState<string>();
  const detect = () => {
    window.addEventListener(
      "orientationchange",
      function () {
        setOrientation(
          Number(window.orientation) === 90 ? "landscape" : "portrait"
        );
      },
      false
    );
  };
  useEffect(() => {
    detect();
  }, [windowSize]);

  useEffect(() => {
    setOrientation(
      Number(window.orientation) === 90 ? "landscape" : "portrait"
    );
  }, []);

  return orientation;
};
