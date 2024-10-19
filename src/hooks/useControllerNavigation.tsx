import { useEffect, useRef } from "react";

export const useControllerNavigation = (
  scrollSpeed: number,
  fastScrollSpeed: number,
  jumpDistance: number
) => {
  const requestRef = useRef<number | undefined>();
  const isMountedRef = useRef(true);
  const hasGamepadRef = useRef(false);
  const lastJumpTimeRef = useRef<number>(0); // Ref to control jump intervals

  useEffect(() => {
    isMountedRef.current = true;

    const handleGamepadConnected = () => {
      hasGamepadRef.current = true;
    };

    const handleGamepadDisconnected = () => {
      hasGamepadRef.current = false;
    };

    window.addEventListener("gamepadconnected", handleGamepadConnected);
    window.addEventListener("gamepaddisconnected", handleGamepadDisconnected);

    const handleGamepadInput = () => {
      if (hasGamepadRef.current) {
        const gamepads = navigator.getGamepads();
        if (gamepads && gamepads.length > 0) {
          const gp = gamepads[0];
          if (gp) {
            /*** Combined Scrolling Input ***/
            const verticalAxis = gp.axes[1];
            const deadZone = 0.1;
            const isXPressed = gp.buttons[0].pressed; // 'X' button (Cross)
            const isSquarePressed = gp.buttons[2].pressed; // 'Square' button

            let totalScrollInput = 0;

            // Left Stick Input
            if (Math.abs(verticalAxis) > deadZone) {
              totalScrollInput += verticalAxis;
            }

            // D-pad Input
            if (gp.buttons[12].pressed) {
              totalScrollInput -= 1; // Up
            }
            if (gp.buttons[13].pressed) {
              totalScrollInput += 1; // Down
            }

            // If there is scroll input
            if (totalScrollInput !== 0) {
              const currentScrollSpeed = isXPressed
                ? fastScrollSpeed
                : scrollSpeed;

              if (isSquarePressed) {
                /*** Instant Scroll ***/
                const now = Date.now();
                const timeSinceLastJump = now - lastJumpTimeRef.current;
                if (timeSinceLastJump >= 150) {
                  const direction = Math.sign(totalScrollInput);
                  jumpPage(direction);
                  lastJumpTimeRef.current = now;
                }
              } else {
                /*** Smooth Scroll ***/
                const scrollAmount = totalScrollInput * currentScrollSpeed;
                window.scrollBy(0, scrollAmount);
              }
            }
          }
        }
      }

      if (isMountedRef.current) {
        requestRef.current = requestAnimationFrame(handleGamepadInput);
      }
    };

    /*** Helper Function to Jump Pages ***/
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

    requestRef.current = requestAnimationFrame(handleGamepadInput);

    return () => {
      isMountedRef.current = false;
      if (requestRef.current !== undefined) {
        cancelAnimationFrame(requestRef.current);
      }
      window.removeEventListener("gamepadconnected", handleGamepadConnected);
      window.removeEventListener(
        "gamepaddisconnected",
        handleGamepadDisconnected
      );
    };
  }, [scrollSpeed, fastScrollSpeed, jumpDistance]);
};
