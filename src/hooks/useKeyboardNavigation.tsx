/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

export const useKeyboardNavigation = (scrollSpeed: any) => {
  const scrollRef = useRef({
    isScrollingUp: false,
    isScrollingDown: false,
  });

  useEffect(() => {
    let animationFrameId: any;

    const scrollStep = () => {
      if (scrollRef.current.isScrollingUp) {
        window.scrollBy(0, -scrollSpeed / 60); // Dividing by 60 to adjust for 60fps
      }
      if (scrollRef.current.isScrollingDown) {
        window.scrollBy(0, scrollSpeed / 60);
      }
      if (
        scrollRef.current.isScrollingUp ||
        scrollRef.current.isScrollingDown
      ) {
        animationFrameId = requestAnimationFrame(scrollStep);
      }
    };

    const handleKeyDown = (event: any) => {
      if (
        event.target.tagName === "INPUT" ||
        event.target.tagName === "TEXTAREA" ||
        event.ctrlKey ||
        event.altKey ||
        event.metaKey
      ) {
        return;
      }

      if (event.repeat) {
        // Ignore repeat events to prevent multiple scroll loops
        return;
      }

      switch (event.key) {
        case "w":
        case "W":
        case "ArrowUp":
          if (!scrollRef.current.isScrollingUp) {
            scrollRef.current.isScrollingUp = true;
            animationFrameId = requestAnimationFrame(scrollStep);
          }
          event.preventDefault();
          break;
        case "s":
        case "S":
        case "ArrowDown":
          if (!scrollRef.current.isScrollingDown) {
            scrollRef.current.isScrollingDown = true;
            animationFrameId = requestAnimationFrame(scrollStep);
          }
          event.preventDefault();
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (event: any) => {
      switch (event.key) {
        case "w":
        case "W":
        case "ArrowUp":
          scrollRef.current.isScrollingUp = false;
          event.preventDefault();
          break;
        case "s":
        case "S":
        case "ArrowDown":
          scrollRef.current.isScrollingDown = false;
          event.preventDefault();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Clean up
    return () => {
      scrollRef.current.isScrollingUp = false;
      scrollRef.current.isScrollingDown = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [scrollSpeed]);
};
