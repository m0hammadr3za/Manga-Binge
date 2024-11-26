"use client";

import { OptionsContext } from "@/app/_context/OptionsContext";
import { useContext } from "react";

export const ToggleOptionsOverlay = () => {
  const { toggleOptionsOverlay } = useContext(OptionsContext);

  return <button onClick={toggleOptionsOverlay}>Options</button>;
};
