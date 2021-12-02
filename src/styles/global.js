import { createGlobalStyle } from "styled-components";

//https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    min-height: 100vh;
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
    color: ${({ theme }) => theme.footerText}
  }
  .homepage {
    .circle {
      background: ${({ theme }) => theme.gradient};
      boxShadow: ${({ theme }) => theme.boxShad};
    }
    a {
      color: ${({ theme }) => theme.color}
    } 
  }
  .cv{
    a {
      color: ${({ theme }) => theme.color}
    }
  }
  .footer{
    background-color: ${({ theme }) => theme.footerColor};
  }
  .navbar {
  background-color: ${({ theme }) => theme.footerColor};
  }
  .nav-menu.active {
    background: ${({ theme }) => theme.footerColor};
  }
  .nav-item .active {
    border: 0px;
    border-bottom: 4px solid;
    border-image:  ${({ theme }) => theme.gradient};
    border-image-slice: 1;
    margin: auto;
    text-decoration: none;
  }
  .react-pdf__Page__canvas {
    background: ${({ theme }) => theme.gradient};
    box-shadow: ${({ theme }) => theme.boxShad};
  }
  .projects{
    a{
      color:${({ theme }) => theme.color};
    }
  }
  .extra {
    background: ${({ theme }) => theme.footerColor};
  }
  .nav-icon {
    color:${({ theme }) => theme.color};
  }
  .login__container {
    box-shadow: ${({ theme }) => theme.boxShad};
  }
  .register__container {
    box-shadow: ${({ theme }) => theme.boxShad};
    color:${({ theme }) => theme.body};
    a {
      color:${({ theme }) => theme.secondary};
    }
  }
}
`;
