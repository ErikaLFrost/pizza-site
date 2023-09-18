import { createGlobalStyle } from 'styled-components';
import PlatonickFont from './PlatonickFont.ttf';

export default createGlobalStyle`
@font-face {
    font-family: 'PlatonickFont';
    src: local('PlatonickFont'), url(${PlatonickFont}) format('truetype');
    font-weight: normal;
}

html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Raleway';
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'PlatonickFont';
    font-weight: normal;
  }
`;