"use client";

import { OptionsContext } from "@/app/_context/OptionsContext";
import { useContext } from "react";
import { Options } from ".";

export const OptionsOverlay = () => {
  const { optionsOverlay } = useContext(OptionsContext);

  if (optionsOverlay === "show") return <Options />;
  return null;
};
