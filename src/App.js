import styled from "styled-components";
import GlobalFonts from "./fonts/fonts";
import Hero from "./components/Hero";
import MenuColor from "./components/MenuColor";
import VisitUs from "./components/VisitUs";
import AboutUs from "./components/AboutUs";
import Insta from "./components/Insta";
/* import Sticky from "./components/Sticky"; */
import Navigation from "./components/Navigation";
import PizzaAnimation from "./components/PizzaAnimation";
import PizzaImgSign from "./components/PizzaImgSign";
import PizzaPizza from "./components/Pizzatext";
import Synthwave from "./components/Synthwave";
import PreviewImage from "./components/PreviewImage";
/* import ClosedMenu from "./components/Closed"; */

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
      {/* <Sticky /> */}
      <GlobalFonts />
      <Hero />
      <PreviewImage />
      <GridWrapper>
        <MenuColor />
        <VisitUs />
        <PizzaPizza />
        <AboutUs />
        <PizzaImgSign />
        <PizzaAnimation />
      </GridWrapper>
      <Synthwave />
      <Insta />
    </MainWrapper>
  );
}

export default App;
