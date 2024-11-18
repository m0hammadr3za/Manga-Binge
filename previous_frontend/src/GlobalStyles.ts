import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ isScrollbarVisible: boolean }>`
  *,
  *::before,
  *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

  html,
  body {
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  line-height: ${({ theme }) => theme.typography.lineHeigh.medium};
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  body {
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  overflow: ${({ isScrollbarVisible }) =>
    isScrollbarVisible ? "auto" : "hidden"};
    transition: background-color 0.3s, color 0.3s;
  }

  /* Custom Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }

  body::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbarTrack};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollbarThumb};
    border-radius: 6px;
    border: 3px solid ${({ theme }) => theme.scrollbarTrack};
  }

  /* Firefox */
  body {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) =>
      `${theme.scrollbarThumb} ${theme.scrollbarTrack}`};
  }

  a {
  text-decoration: none;
  color: inherit;
  }

  ul,
  ol {
  list-style: none;
  }

  img,
  picture,
  video,
  canvas,
  svg {
  display: block;
  max-width: 100%;
  }

  button,
  input,
  textarea,
  select {
  font: inherit;
  border: none;
  outline: none;
  }

  button {
  cursor: pointer;
  background-color: transparent;
  }

  table {
  border-collapse: collapse;
  border-spacing: 0;
  }

  blockquote,
  q {
  quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
  content: "";
  content: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
  margin: 0;
  }

  address {
  font-style: normal;
  }
`;

export default GlobalStyle;
