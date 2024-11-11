/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../GlobalStyles";
import { Fragment } from "react";
import { theme } from "../theme";

export const StylingWrapper = (props: any): any => {
  const { children } = props;

  const { breakpoints, colors, radius, shadows, spacing, typography } = theme;

  const finalColors = colors.darkTheme;

  const finalTheme = {
    breakpoints,
    finalColors,
    radius,
    shadows,
    spacing,
    typography,
  };

  return (
    <Fragment>
      <ThemeProvider theme={finalTheme}>
        <GlobalStyle isScrollbarVisible={true} />

        {children}
      </ThemeProvider>
    </Fragment>
  );
};
