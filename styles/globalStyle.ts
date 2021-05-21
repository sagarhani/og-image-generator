import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: Poppins;
  }
  
  a {
      color: inherit;
      text-decoration: none;
  }
`;
