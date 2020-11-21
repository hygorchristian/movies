import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
    transition: color 500ms linear;
    transition: background-color 500ms linear;
  }

  html, body, #root{
    height: 100%;
    width: 100%;
  }

  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    font-family: Nunito, sans-serif;
    color: #ffffff;
    user-select: none;
  }
`;
