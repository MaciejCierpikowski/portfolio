import React, { ReactNode, useEffect, useState } from "react";
import useMobileDetect from "../../hooks/useMobileDetect";
import animatedScrollTo from "../../utils/animated-scroll-to";

interface IFullPageSlider {
  children: ReactNode;
  initialSlide: number;
}

const FullPageSlider = ({ initialSlide, children }: IFullPageSlider) => {
  const getChildrenCount = (children: ReactNode) => {
    const childrenArr = React.Children.toArray(children);
    return childrenArr.length;
  };

  const isScrollPending = React.useRef<boolean>(false);
  const isScrolledAlready = React.useRef<boolean>(false);
  const touchStart = React.useRef<number>(0);

  const slides = React.useRef<Array<number>>([]);
  const touchSensitivity = 5;

  const [activeSlide, setActiveSlide] = useState<number>(initialSlide);
  const [slidesCount] = useState<number>(getChildrenCount(children));
  const [height, setHeight] = useState<number>();

  const currentDevice = useMobileDetect();

  const activeSlideRef = React.useRef(activeSlide);

  const setActiveSlideState = (slide: number) => {
    activeSlideRef.current = slide;
    setActiveSlide(slide);
  };

  useEffect(() => {
    if (currentDevice.isMobile()) {
      console.log("currentDevice.isMobile()", currentDevice.isMobile());

      document.addEventListener("touchmove", (event) => onTouchMove(event), {
        passive: false,
      });
      document.addEventListener("touchstart", (event) => onTouchStart(event));
    } else {
      document.addEventListener("wheel", onScroll, { passive: false });
    }
    window.addEventListener("resize", onResize);

    onResize();
  }, []);

  const updateSlides = () => {
    slides.current = [];

    for (let i = 0; i < slidesCount; i++) {
      slides.current.push(window.innerHeight * i);
    }
  };

  const onResize = () => {
    updateSlides();
    setHeight(window.innerHeight);
  };

  const onScroll = (event: any) => {
    event.preventDefault();

    if (isScrollPending.current) {
      return;
    }

    const scrollDown = (event.wheelDelta || -event.deltaY || -event.detail) < 0;
    let activeSlideTemp = activeSlideRef.current;

    if (scrollDown) {
      setActiveSlideState(activeSlideTemp++);
    } else {
      setActiveSlideState(activeSlideTemp--);
    }

    scrollToSlide(activeSlideTemp);
  };

  const onTouchMove = (event: any) => {
    event.preventDefault();
    const touchEnd = event.changedTouches[0].clientY;
    if (!isScrollPending.current && !isScrolledAlready.current) {
      if (touchStart.current > touchEnd + touchSensitivity) {
        scrollToSlide(activeSlideRef.current + 1);
      } else if (touchStart.current < touchEnd - touchSensitivity) {
        scrollToSlide(activeSlideRef.current - 1);
      }
    }
  };

  const onTouchStart = (event: any) => {
    touchStart.current = event.touches[0].clientY;
    isScrolledAlready.current = false;
  };

  const scrollToSlide = (slide: number) => {
    if (!isScrollPending.current && slide >= 0 && slide < slidesCount) {
      setActiveSlideState(slide);
      console.log(slide, "slide");
      isScrollPending.current = true;
      console.log(slides.current[slide], "slides.current[slide]");
      animatedScrollTo(slides.current[slide], () => {
        isScrollPending.current = false;
        isScrolledAlready.current = true;
      });
    }
  };

  return <div style={{ height: height }}>{children}</div>;
};

export default FullPageSlider;
