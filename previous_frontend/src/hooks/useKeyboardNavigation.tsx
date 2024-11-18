import { useEffect, useRef } from "react";

export const useKeyboardNavigation = (
  scrollSpeed: number,
  fastScrollSpeed: number,
  jumpDistance: number
) => {
  const scrollRef = useRef({
    isScrollingUp: false,
    isScrollingDown: false,
    isShiftPressed: false,
    isCapsLockOn: false,
  });
  const lastJumpTimeRef = useRef<number>(0);

  useEffect(() => {
    let animationFrameId: number;

    const scrollStep = () => {
      if (scrollRef.current.isShiftPressed && scrollRef.current.isCapsLockOn) {
        // Instant jump
        const now = Date.now();
        const timeSinceLastJump = now - lastJumpTimeRef.current;

        if (timeSinceLastJump >= 150) {
          if (scrollRef.current.isScrollingUp) {
            jumpPage(-1);
          }
          if (scrollRef.current.isScrollingDown) {
            jumpPage(1);
          }
          lastJumpTimeRef.current = now;
        }
      } else {
        let currentScrollSpeed = scrollSpeed;

        if (scrollRef.current.isShiftPressed) {
          currentScrollSpeed = fastScrollSpeed;
        }

        if (scrollRef.current.isScrollingUp) {
          window.scrollBy(0, -currentScrollSpeed / 60);
        }
        if (scrollRef.current.isScrollingDown) {
          window.scrollBy(0, currentScrollSpeed / 60);
        }
      }

      if (
        scrollRef.current.isScrollingUp ||
        scrollRef.current.isScrollingDown
      ) {
        animationFrameId = requestAnimationFrame(scrollStep);
      }
    };

    const jumpPage = (direction: number) => {
      let scrollAmount: number;

      if (jumpDistance <= 10) {
        // Treat jumpDistance as a fraction of the viewport height
        scrollAmount = window.innerHeight * jumpDistance * direction;
      } else {
        // Treat jumpDistance as an absolute pixel value
        scrollAmount = jumpDistance * direction;
      }

      const maxScrollTop =
        document.documentElement.scrollHeight - window.innerHeight;
      let targetScrollTop = window.scrollY + scrollAmount;

      // Clamp the target scroll position within valid bounds
      targetScrollTop = Math.max(0, Math.min(targetScrollTop, maxScrollTop));

      window.scrollTo({
        top: targetScrollTop,
        behavior: "instant",
      });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLElement &&
        (event.target.tagName === "INPUT" ||
          event.target.tagName === "TEXTAREA" ||
          event.ctrlKey ||
          event.altKey ||
          event.metaKey)
      ) {
        return;
      }

      if (event.repeat) {
        // Ignore repeat events to prevent multiple scroll loops
        return;
      }

      if (event.key === "Shift") {
        scrollRef.current.isShiftPressed = true;
        scrollRef.current.isCapsLockOn = event.getModifierState("CapsLock");
        event.preventDefault();
      } else {
        // Update CapsLock state
        scrollRef.current.isCapsLockOn = event.getModifierState("CapsLock");
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

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Shift") {
        scrollRef.current.isShiftPressed = false;
        scrollRef.current.isCapsLockOn = event.getModifierState("CapsLock");
        event.preventDefault();
      } else {
        // Update CapsLock state
        scrollRef.current.isCapsLockOn = event.getModifierState("CapsLock");
      }

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
  }, [scrollSpeed, fastScrollSpeed, jumpDistance]);
};
