import './App.css';
import React from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import Menu from './components/Menu';
import VisitUs from './components/VisitUs';
import Catering from './components/Catering';
import Merch from './components/Merch';
import AboutUs from './components/AboutUs';
import Insta from './components/Insta';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
`

function App() {
  return (
    <GridWrapper>
      <Hero />
      <Menu />
      <VisitUs />
      <Catering />
      <Merch />
      <AboutUs />
      <Insta />
    </GridWrapper>
  );
}

export default App;
