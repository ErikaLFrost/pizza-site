import styled from "styled-components";
import "../fonts/fonts";

const MenuWrapper = styled.div`
  grid-column: span 6;
  background-color: black;
  color: white;

  @media (max-width: 1000px) {
    grid-column: span 12;
  }
`;

const MenuMenu = styled.div`
  width: calc(100% - 20px);
  max-width: 500px;
  padding-bottom: 50px;
  border: 2px solid black;
  box-sizing: border-box;
  position: relative;
  /* text-transform: uppercase; */
  margin: 0 auto;

  @media (min-width: 530px) {
    max-width: 800px;
  }

  @media (min-width: 1000px) {
    max-width: 800px;
    width: calc(100% - 10px);
    margin: 0 0 0 5px;
  }

  /* Second Border */
  &:before {
    content: " ";
    position: absolute;
    z-index: -1;
    top: -6px;
    left: -12px;
    width: calc(100% + 20px);
    height: calc(100% + 8px);
    border: 2px solid black;
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 60px;
    filter: drop-shadow(0 0 0.5rem rgba(251, 205, 205, 0.5));
    font-family: "Rampart One", cursive;

    @media (min-width: 530px) {
      font-size: 80px;
      margin: 20px 0;
    }
  }

  h2 {
    font-family: "Shadows Into Light", cursive;
    text-transform: uppercase;
    text-align: center;
    font-size: 20px;
    margin-bottom: 0;
    font-weight: 600;

    @media (min-width: 530px) {
      font-size: 26px;
    }

    @media (min-width: 1000px) {
      font-size: 30px;
      margin-top: 16px;
    }
  }

  .obs {
    padding-top: 30px;
    text-decoration: none;
    font-weight: 400;
  }

  p {
    text-align: center;
    margin: 0;
    padding: 0 10px;
    font-size: 12px;

    @media (min-width: 530px) {
      font-size: 16px;
    }

    @media (min-width: 1000px) {
      font-size: 16px;
    }
  }

  /* Alla Pizzor 125 kr */
  span {
    display: block;
    text-align: center;
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    text-decoration: underline;
    margin-bottom: 10px;

    @media (min-width: 1000px) {
      font-size: 18px;
    }
  }

  div {
    transform: rotate(-32deg);
    display: inline-block;
    position: relative;
    bottom: -30px;
    left: 70px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;

    @media (min-width: 1000px) {
      font-size: 20px;
    }
  }
`;

const MenuColor = () => {
  return (
    <MenuWrapper id="menuSection">
      <MenuMenu>
        <h1>Menu</h1>
        <span>Alla pizzor 125 kr</span>
        <span>Välj mellan vegetariskt eller veganskt</span>
        <div>Le Rosse:</div>
        <h2 style={{color: "red"}}>{/* &#9658; */} Marinara {/* &#9668; */}</h2>
        <p>
          San Marzanotomater, Vitlök, Oregano, Olivolja
        </p>
        <h2 style={{color: "pink"}}>{/* &#9658; */} Margherita  {/* &#9668; */}</h2>
        <p>
          San Marzanotomater, Fior di Latte, Pecorino, Basilika, Olivolja
        </p>
        <h2 style={{color: "orange"}}>{/* &#9658; */} Nduja {/* &#9668; */}</h2>
        <p>
          San Marzanotomater, Fior di Latte, Pecorino, Veg Nduja, Basilika, Olivolja
        </p>
        <h2 style={{color: "lightgreen"}}>{/* &#9658; */} Jammin {/* &#9668; */}</h2>
        <p>
          San Marzanotomater, Fior di Latte, Pecorino, Seitan, Vitlök & Chilisylt, Basilika, Olivolja
        </p>
        <h2 style={{color: "green"}}>{/* &#9658; */} Napolitanish {/* &#9668; */}</h2>
        <p>
          San Marzanotomater, Fior di Latte, Pecorino,  Oregano, Oliver, Kapris, Kronärtskocka
        </p>
        <div>Le Bianche:</div>
        <h2 style={{color: "red"}}>{/* &#9658; */} Patata {/* &#9668; */}</h2>
        <p>
          Créme Fraiche, Pecorino, Fior di Latte, Rosmarin, Potatis, Tomatpesto, Olivolja
        </p>

        <h2 style={{color: "pink"}}>{/* &#9658; */} Al Funghi {/* &#9668; */}</h2>
        <p>
          Créme Fraiche, Pecorino, Fior di Latte, Champinjoner, Persilja, Vitlöksolja
        </p>

        <h2 style={{color: "aqua"}}>{/* &#9658; */} Blue {/* &#9668; */}</h2>
        <p>
          Créme Fraiche, Pecorino, Fior di Latte, Gorgonzola, Päron, Valnötter,
          Honung, Olivolja
        </p>
        <span className="obs">
          OBS:<br></br>
          Vi har ingen glutenfri pizzabotten<br></br>
          Vi erbjuder ingen hemleverans
        </span>
      </MenuMenu>
    </MenuWrapper>
  );
};

export default MenuColor;
