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

const MainWrapper = styled.div`
  position: relative;
`;


const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
`

function App() {
  return (
    <MainWrapper>
      <GlobalFonts />
      <GridWrapper>
        <Hero />
        <Menu />
        <VisitUs />
        <Catering />
        <Merch />
        <AboutUs />
        <Insta />
      </GridWrapper>
    </MainWrapper>
  );
}

export default App;
