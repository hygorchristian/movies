import { createGlobalStyle } from 'styled-components';
import MarkPro from '~/assets/fonts/mark-pro.otf';
import MarkProBold from '~/assets/fonts/mark-pro-bold.otf';
import MarkProHair from '~/assets/fonts/mark-pro-hairline.otf';

export default createGlobalStyle`
  @font-face {
    font-family: 'MarkPro';
    url(${MarkPro}) format('otf'),
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'MarkPro';
    url(${MarkProBold}) format('otf'),
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'MarkPro';
    url(${MarkProHair}) format('otf'),
    font-weight: 200;
    font-style: normal;
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
