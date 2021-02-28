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
import Crew from './components/Crew';
import Navigation from './components/Navigation';
import PizzaImg from './components/PizzaImg';

const MainWrapper = styled.div`
  position: relative;
  background-color: #F29699;
  /* padding-bottom: 50px; */
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
      <Navigation />
      <Sticky />
      <GlobalFonts />
      <Hero />
      <GridWrapper>
        <Menu />
        <VisitUs />
        <Catering />
        <Merch />
        <AboutUs />
        <PizzaImg />
        <Crew />
      </GridWrapper>
      <Insta />
    </MainWrapper>
  );
}

export default App;
