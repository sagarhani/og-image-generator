import { createGlobalStyle } from "styled-components";
import { colors } from "./tokens";
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
    background-color:${colors.bodyBackground}
  }
  
  a {
      color: inherit;
      text-decoration: none;
  }
`;
