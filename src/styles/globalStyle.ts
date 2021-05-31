import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --dt-background: #F0F2F5;
    --dt-text: #969CB3;
    --dt-title: #363F5F;
    --dt-shape: #FFFFFF;
    --dt-danger: #E62E4D;
    --dt-success: #33CC95;
    --dt-primary: #5429CC;
    --dt-primary-light: #6933FF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  html, body {
    height: 100%;
  }

  body {
    background: var(--dt-background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
