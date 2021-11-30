import { createGlobalStyle } from "styled-components";

//https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }
  h1 {
  font-size: 4em;
  background: ${({ theme }) => theme.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  text-align: center;
  margin: 0;
  font-family: 'Abril Fatface', cursive;
}
h3 {
  display:inline-block;
  background: ${({ theme }) => theme.gradient};
  background-size:100% 4px;
  background-position:bottom 0 left 0,bottom 8px left 0;
  background-repeat:no-repeat;
}
p {
  margin: 0.4em;
  font-family: 'Roboto', sans-serif;
  font-size: 14pt;
}
a {
  text-decoration: none;
  color: ${({ theme }) => theme.color};
}
  `;
