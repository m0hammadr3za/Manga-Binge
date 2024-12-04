import { useEffect, useState } from "react";

export type ScrollbarType = "show" | "hide";
export type toggleScrollbar = (newState: ScrollbarType) => void;

export const useScrollbar = (initialState: ScrollbarType) => {
  const [scrollbar, setScrollbar] = useState<ScrollbarType>(() => {
    const storedScrollbar = localStorage.getItem("scrollbar") as ScrollbarType;

    if (storedScrollbar) return storedScrollbar;
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem("scrollbar", scrollbar);
    document.documentElement.setAttribute("scrollbar", scrollbar);
  }, [scrollbar]);

  const toggleScrollbar = (newState: ScrollbarType) => {
    setScrollbar(newState);
  };

  return { scrollbar, toggleScrollbar };
};
