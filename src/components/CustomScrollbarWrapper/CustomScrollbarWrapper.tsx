/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: #141414;
    color: #333;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  /* Default Scrollbar Styles */

  /* Hidden Scrollbar Styles */
  body.hide-scrollbar {
    /* For WebKit Browsers */
    ::-webkit-scrollbar {
      display: none;
    }
    /* For Firefox */
    scrollbar-width: none;
  }
`;

export const CustomScrollbarWrapper = ({ children }: any) => {
  const [hideScrollbar, setHideScrollbar] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("hide-scrollbar", hideScrollbar);
  }, [hideScrollbar]);

  return (
    <>
      <GlobalStyles />
      <button onClick={() => setHideScrollbar(!hideScrollbar)}>
        Toggle scrollbar
      </button>
      {children}
    </>
  );
};
