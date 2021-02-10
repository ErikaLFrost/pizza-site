import { createGlobalStyle } from 'styled-components';
import PlatonickFont from './PlatonickFont.ttf';

export default createGlobalStyle`
@font-face {
    font-family: 'PlatonickFont';
    src: local('PlatonickFont'), url(${PlatonickFont}) format('truetype');
    font-weight: normal;
    font-family: "Menlo"; 
    src: url("//db.onlinewebfonts.com/t/9f94dc20bb2a09c15241d3a880b7ad01.eot"); 
    src: url("//db.onlinewebfonts.com/t/9f94dc20bb2a09c15241d3a880b7ad01.eot?#iefix") format("embedded-opentype"), 
    /* url("//db.onlinewebfonts.com/t/9f94dc20bb2a09c15241d3a880b7ad01.woff2") format("woff2"), 
    url("//db.onlinewebfonts.com/t/9f94dc20bb2a09c15241d3a880b7ad01.woff") format("woff"), 
    url("//db.onlinewebfonts.com/t/9f94dc20bb2a09c15241d3a880b7ad01.ttf") format("truetype") */
}
html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Menlo';
  }

  h1, h2, h3, h4, h5, h6{
    font-family: 'PlatonickFont';
  }

  /* body.fontLoaded {
    font-family: 'PlatonickFont', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  } */
`;