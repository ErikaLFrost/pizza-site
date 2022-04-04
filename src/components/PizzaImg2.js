import pizzaImg from "../images/skylt.jpg";
import SectionComponent from "./SectionComponent";

const PizzaImg2 = () => {
  return (
    <SectionComponent
      bgImage={pizzaImg}
      span={"5"}
      marginTop={"-500px"}
      paddingTop={"86.5%"}
      hideOnMobile={false}
      noFilter={true}
    >
      <span
        className="background-image"
        role="img"
        aria-label="Neapolitansk pizza"
      ></span>
    </SectionComponent>
  );
};

export default PizzaImg2;
