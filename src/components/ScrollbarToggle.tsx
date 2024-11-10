import { useState, useEffect } from "react";

const ScrollbarToggle = () => {
  const [isScrollbarVisible, setIsScrollbarVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isScrollbarVisible ? "auto" : "hidden";

    // Clean up when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isScrollbarVisible]);

  const toggleScrollbar = () => {
    setIsScrollbarVisible((prevState) => !prevState);
  };

  return (
    <button onClick={toggleScrollbar}>
      {isScrollbarVisible ? "Hide Scrollbar" : "Show Scrollbar"}
    </button>
  );
};

export default ScrollbarToggle;
