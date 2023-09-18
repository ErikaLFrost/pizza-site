import styled from "styled-components";
import FlickerAnimation from "./Flicker";

const PizzaText = styled.div`
    display: none;

  @media (min-width: 1000px) {
    display: block;
    position: absolute;
    margin: 0;
    font-size: 90px;
    right: 150px;
    top: 600px;

    h3 {
        filter: drop-shadow(0 0 0.5rem rgba(255, 255, 255, 0.76));
        color: white;
        animation: ${FlickerAnimation} linear infinite;
        margin: 0;
    }
  }
`;

const PizzaPizza = () => {
  return (
    <PizzaText>
      <h3>&#8592; Pizza</h3>
    </PizzaText>
  );
};

export default PizzaPizza;