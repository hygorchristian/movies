import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root{
    width: 100%;
    background-color: rgba(12,21,29,.8);
  }

  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Source Sans Pro', sans-serif;
    color: #ffffff;
    user-select: none;
  }
`;
