import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/GlobalStyles";
import { theme } from "../src/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: "Dark", value: "#333" },
        { name: "Light", value: "#F7F9F2" },
        { name: "Black", value: "#000000" },
        { name: "White", vlaue: "#ffffff" },
      ],
      default: "Light",
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
