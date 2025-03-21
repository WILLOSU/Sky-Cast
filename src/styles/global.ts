import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #FF6600;
    --color-secondary: #FF5600;
    --color-dark: #CC5200;
    --color-light: #FFE5D5;

    --font-primary: "Montserrat", sans-serif;
    --font-secondary: "Inter", sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-secondary);
    background-color: var(--color-light);
    color: var(--color-dark);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-primary);
  }
`;
