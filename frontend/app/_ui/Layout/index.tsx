"use client";

import { ReactNode, useContext } from "react";
import styles from "./index.module.scss";
import { Navbar } from "./Navbar";
import { Options } from "../Options";
import { OptionsContext } from "@/app/_context/OptionsContext";

export const Layout = ({ children }: { children: ReactNode }) => {
  const { optionsOverlay } = useContext(OptionsContext);

  return (
    <div className={styles.layout}>
      <div className={styles.layout__content}>
        <div>
          <Navbar />
        </div>

        <div>{children}</div>

        {optionsOverlay === "show" && <Options />}
      </div>
    </div>
  );
};
