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
    height: 100vh;
    background-image: linear-gradient(0deg, #f794a4 0%, #fdd6bd 100%);    
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
  a {
      color: inherit;
      text-decoration: none;
  }
`;
