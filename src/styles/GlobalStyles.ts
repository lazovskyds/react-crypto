import { createGlobalStyle } from 'styled-components';
import {
   openSansRegular,
   openSansSemiBold,
   openSansBold,
} from '@assets/fonts/index';
import { colors } from './colors';

export const GlobalStyles = createGlobalStyle`
   * {
      font-family: 'Open Sans', sans-serif;
      box-sizing: border-box;
      color: ${colors.gray};
      margin: 0;
   }

   body, html, #root {
      height: 100%;
      width: 100%;
   }
   
   body {
      background-color: ${colors.background};
      display: flex;
      flex-direction: column;
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
