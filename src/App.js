import styled from "styled-components";
import GlobalFonts from "./fonts/fonts";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import MenuNew from "./components/MenuNew";
import MenuColor from "./components/MenuColor";
import VisitUs from "./components/VisitUs";
import Catering from "./components/Catering";
import Merch from "./components/Merch";
import AboutUs from "./components/AboutUs";
import Insta from "./components/Insta";
import Sticky from "./components/Sticky";
import CrewImg from "./components/CrewImg";
import Navigation from "./components/Navigation";
import PizzaImg from "./components/PizzaImg";
import PizzaPizza from "./components/Pizzatext";
import Synthwave from "./components/Synthwave";
import PreviewImage from "./components/PreviewImage";
import ClosedMenu from "./components/Closed";

const MainWrapper = styled.div`
  position: relative;
  /* background-color: #F29699; */
`;

const GridWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
`;

function App() {
  return (
    <MainWrapper>
      <Navigation />
      {/* <ClosedMenu /> */}
      <Sticky />
      <GlobalFonts />
      <Hero />
      <PreviewImage />
      <GridWrapper>
        <MenuNew />
        <VisitUs />
        <PizzaPizza />
        <Catering />
        <Merch />
        <CrewImg />
        <PizzaImg />
        <AboutUs />
      </GridWrapper>
      <Synthwave />
      <Insta />
    </MainWrapper>
  );
}

export default App;
