import { createGlobalStyle } from 'styled-components';
import PlatonickFont from './PlatonickFont.ttf';

export default createGlobalStyle`
@font-face {
    font-family: 'PlatonickFont';
    src: local('PlatonickFont'), url(${PlatonickFont}) format('truetype');
    font-weight: normal;
}
/* Inte helt 100 på om denna font faktiskt syns? */
@font-face {
    font-family: 'Menlo';
    src: url('http://fonts.cdnfonts.com/css/menlo');
}
html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Menlo';
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'PlatonickFont';
  }

  /* body.fontLoaded {
    font-family: 'PlatonickFont', 'Menlo', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  } */
`;