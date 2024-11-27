"use client";

import { OptionsContext } from "@/app/_context/OptionsContext";
import { useContext } from "react";

export const OptionsButton = () => {
  const { toggleOptionsOverlay } = useContext(OptionsContext);

  return <button onClick={() => toggleOptionsOverlay("show")}>Options</button>;
};
