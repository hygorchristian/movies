import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: "MarkPro";
    src: url("/fonts/mark-pro.otf") format("otf");
  }

  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root{
    width: 100%;
    background-color: rgba(12,21,29,.8);
    color: white;
  }

  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    font-family: MarkPro, sans-serif;
    color: #ffffff;
    user-select: none;
  }
`;
