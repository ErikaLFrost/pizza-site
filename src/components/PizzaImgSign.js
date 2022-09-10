import pizzaImg from "../images/skylt.jpg";
import SectionComponent from "./SectionComponent";

const PizzaImgSign = () => {
  return (
    <SectionComponent
      bgImage={pizzaImg}
      span={"5"}
      marginTop={"-250px;"}
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

export default PizzaImgSign;
