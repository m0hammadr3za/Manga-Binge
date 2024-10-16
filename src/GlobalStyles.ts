import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
  font-size: 16px;
  line-height: 1.5;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  body {
  background-color: #fff;
  color: #333;
  overflow-x: hidden;
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
