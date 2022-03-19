import { createGlobalStyle } from 'styled-components';

import openSansRegular from '../assets/fonts/opensans-regular.ttf';
import openSansSemiBold from '../assets/fonts/opensans-semibold.ttf';
import openSansBold from '../assets/fonts/opensans-bold.ttf';

import colors from './colors';

const { gray, background } = colors;

const GlobalStyle = createGlobalStyle`
   * {
      font-family: 'Open Sans', sans-serif;
      box-sizing: border-box;
      color: ${gray};
      margin: 0;
   }

   body, html, #root {
      height: 100%;
      width: 100%;
   }
   
   body {
      background-color: ${background};
      display: flex;
      flex-direction: column;
   }

   h3 {
      margin: 0;
      font-size: 20px;
      font-weight: 600;
      line-height: 30px;
   }

   a {
      text-decoration: none;
   }

   input {
      outline: none;
   }

   ul {
      padding: 0;
   }

   li {
      list-style-type: none;
   }

   @font-face {
      font-family: 'Open Sans';
      src: url(${openSansRegular});
      font-style: normal;
      font-weight: 400;
   }

   @font-face {
      font-family: 'Open Sans';
      src: url(${openSansSemiBold});;
      font-style: normal;
      font-weight: 600;
   }

   @font-face {
      font-family: 'Open Sans';
      src: url(${openSansBold});
      font-style: normal;
      font-weight: 700;
   }
`;

export default GlobalStyle;
