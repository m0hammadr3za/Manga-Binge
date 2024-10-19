import { useEffect, useRef } from "react";

export const useControllerNavigation = (
  scrollSpeed: number,
  fastScrollSpeed: number,
  jumpDistance: number // Renamed parameter
) => {
  const requestRef = useRef<number | undefined>();
  const isMountedRef = useRef(true);
  const hasGamepadRef = useRef(false);
  const previousButtonStatesRef = useRef<{ [key: number]: boolean }>({});
  const dpadIntervalRef = useRef<{ [key: number]: NodeJS.Timeout }>({});

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
            /*** Analog Stick Scrolling ***/
            const verticalAxis = gp.axes[1];
            const deadZone = 0.1;
            if (Math.abs(verticalAxis) > deadZone) {
              const isXPressed = gp.buttons[0].pressed;
              const currentScrollSpeed = isXPressed
                ? fastScrollSpeed
                : scrollSpeed;
              const scrollAmount = verticalAxis * currentScrollSpeed;
              window.scrollBy(0, scrollAmount);
            }

            /*** D-pad Navigation ***/
            const dpadUp = gp.buttons[12];
            const dpadDown = gp.buttons[13];

            // Initialize previous states if undefined
            if (previousButtonStatesRef.current[12] === undefined) {
              previousButtonStatesRef.current[12] = false;
            }
            if (previousButtonStatesRef.current[13] === undefined) {
              previousButtonStatesRef.current[13] = false;
            }

            // Handle D-pad Up
            if (dpadUp.pressed) {
              if (!previousButtonStatesRef.current[12]) {
                // Button was just pressed
                jumpPage(-1);
                // Start interval for repeated jumps
                dpadIntervalRef.current[12] = setInterval(() => {
                  jumpPage(-1);
                }, 150); // Adjust interval time as needed
              }
            } else if (previousButtonStatesRef.current[12]) {
              // Button was just released
              clearInterval(dpadIntervalRef.current[12]);
              delete dpadIntervalRef.current[12];
            }

            // Handle D-pad Down
            if (dpadDown.pressed) {
              if (!previousButtonStatesRef.current[13]) {
                // Button was just pressed
                jumpPage(1);
                // Start interval for repeated jumps
                dpadIntervalRef.current[13] = setInterval(() => {
                  jumpPage(1);
                }, 150); // Adjust interval time as needed
              }
            } else if (previousButtonStatesRef.current[13]) {
              // Button was just released
              clearInterval(dpadIntervalRef.current[13]);
              delete dpadIntervalRef.current[13];
            }

            // Update previous button states
            previousButtonStatesRef.current[12] = dpadUp.pressed;
            previousButtonStatesRef.current[13] = dpadDown.pressed;
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

      // Clear any active intervals
      if (dpadIntervalRef.current[12]) {
        clearInterval(dpadIntervalRef.current[12]);
      }
      if (dpadIntervalRef.current[13]) {
        clearInterval(dpadIntervalRef.current[13]);
      }
    };
  }, [scrollSpeed, fastScrollSpeed, jumpDistance]); // Include jumpDistance in dependencies
};
