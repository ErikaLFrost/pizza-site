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
    font-family: 'PlatonickFont';
  }

  /* body.fontLoaded {
    font-family: 'PlatonickFont', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  } */
`;