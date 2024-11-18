/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

export const useFocusMode = () => {
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      // Check if 'F' key is pressed
      if (event.key === "F" || event.key === "f") {
        if (!document.fullscreenElement) {
          // Enter full-screen mode
          document.documentElement.requestFullscreen().catch((err) => {
            console.error(
              `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
            );
          });
        } else {
          // Exit full-screen mode
          document.exitFullscreen().catch((err) => {
            console.error(
              `Error attempting to exit full-screen mode: ${err.message} (${err.name})`
            );
          });
        }
      }
    };

    // Add event listener
    document.addEventListener("keydown", handleKeyDown);

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};
