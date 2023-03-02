import React, { ReactNode, useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import useMobileDetect from "../../hooks/useMobileDetect";
import { useWindowResize } from "../../hooks/useWindowResize";
import { setActiveSlide, toggleScrollDown } from "../../store/generalState";
import animatedScrollTo from "../../utils/animated-scroll-to";

interface IFullPageSlider {
  children: ReactNode;
}

const FullPageSlider = ({ children }: IFullPageSlider) => {
  const getChildrenCount = (children: ReactNode) => {
    const childrenArr = React.Children.toArray(children);
    return childrenArr.length;
  };

  const dispatch = useAppDispatch();
  const scrollDown = useAppSelector((state) => state.general.scrollDown);
  const activeSlide = useAppSelector((state) => state.general.activeSlide);

  const isScrollPending = React.useRef<boolean>(false);
  const isScrolledAlready = React.useRef<boolean>(false);
  const touchStart = React.useRef<number>(0);

  const slides = React.useRef<Array<number>>([]);
  const touchSensitivity = 5;

  const [slidesCount] = useState<number>(getChildrenCount(children));

  const currentDevice = useMobileDetect();
  const windowResize = useWindowResize();

  const activeSlideRef = React.useRef(activeSlide);

  const setActiveSlideState = (slide: number) => {
    activeSlideRef.current = slide;

    dispatch(setActiveSlide(slide));
  };

  useEffect(() => {
    activeSlideRef.current = activeSlide;
  }, [activeSlide]);

  useEffect(() => {
    if (currentDevice.isMobile()) {
      document.addEventListener("touchmove", (event) => onTouchMove(event), {
        passive: false,
      });
      document.addEventListener("touchstart", (event) => onTouchStart(event));
    } else {
      document.addEventListener("wheel", onScroll, { passive: false });
    }
  }, []);

  useEffect(() => {
    updateSlides();
  }, [windowResize]);

  const updateSlides = () => {
    slides.current = [];

    for (let i = 0; i < slidesCount; i++) {
      slides.current.push(window.innerHeight * i);
    }
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

      if (slide === 0) {
        dispatch(toggleScrollDown(false));
      } else {
        !scrollDown && dispatch(toggleScrollDown(true));
      }

      isScrollPending.current = true;

      animatedScrollTo(slides.current[slide], () => {
        console.log('test');
        isScrollPending.current = false;
        isScrolledAlready.current = true;
      });
    }
  };

  return <div style={{ height: windowResize[1] }}>{children}</div>;
};

export default FullPageSlider;
