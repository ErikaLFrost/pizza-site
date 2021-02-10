import { createGlobalStyle } from 'styled-components';
import * as PlatonickFont from './Platonick Font.ttf'


export default createGlobalStyle`
@font-face {
    font-family: 'Platonick Font';
    src: local('Platonick Font'), url(${PlatonickFont}) format('ttf');
    font-weight: normal;
    font-style: normal;
}
html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Platonick Font', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Platonick Font', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;