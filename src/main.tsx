import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyles";
import { theme } from "./theme";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
