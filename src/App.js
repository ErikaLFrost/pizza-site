import './App.css';
import React from 'react';
import styled from 'styled-components';
import GlobalFonts from './fonts/fonts';
import Hero from './components/Hero';
import Menu from './components/Menu';
import VisitUs from './components/VisitUs';
import Catering from './components/Catering';
import Merch from './components/Merch';
import AboutUs from './components/AboutUs';
import Insta from './components/Insta';
import Sticky from './components/Sticky';

const MainWrapper = styled.div`
  position: relative;
  background-color: #F29699;
  /* padding-bottom: 50px; */
`;
/* Behövs verkligen den här diven? */
const BackgroundWrapper = styled.div`
  /* background-color: #F29699; */
 `;

const GridWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 3rem;
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
`

function App() {
  return (
    <MainWrapper>
      <Sticky />
      <GlobalFonts />
      <Hero />
      <BackgroundWrapper>
        <GridWrapper>
          <Menu />
          <VisitUs />
          <Catering />
          <Merch />
          <AboutUs />
        </GridWrapper>
      </BackgroundWrapper>
      <Insta />
    </MainWrapper>
  );
}

export default App;
