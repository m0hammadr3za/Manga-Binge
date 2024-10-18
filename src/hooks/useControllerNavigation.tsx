/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

export const useControllerNavigation = (scrollSpeed: any) => {
  const requestRef = useRef<any>();
  const isMountedRef = useRef<any>(true);

  useEffect(() => {
    isMountedRef.current = true;

    const handleGamepadInput = () => {
      const gamepads = navigator.getGamepads();
      if (gamepads && gamepads.length > 0) {
        const gp = gamepads[0]; // Use the first connected gamepad
        if (gp) {
          // For PS5 controller, left stick vertical axis is axes[1]
          const verticalAxis = gp.axes[1]; // Range from -1 (up) to 1 (down)

          // Deadzone threshold to prevent drift
          const deadZone = 0.1;
          if (Math.abs(verticalAxis) > deadZone) {
            const scrollAmount = verticalAxis * scrollSpeed;
            window.scrollBy(0, scrollAmount);
          }
        }
      }

      if (isMountedRef.current) {
        requestRef.current = requestAnimationFrame(handleGamepadInput);
      }
    };

    // Start polling for gamepad input
    requestRef.current = requestAnimationFrame(handleGamepadInput);

    return () => {
      isMountedRef.current = false;
      cancelAnimationFrame(requestRef.current);
    };
  }, [scrollSpeed]);
};
