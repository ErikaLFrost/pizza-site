import styled from "styled-components";

const SectionWrapper = styled.div`
  grid-column: span 12;
  width: 100%;
  height: 0;
  padding-top: ${(props) =>
    props.imgProportion ? props.imgProportion : "99.5%"};
  position: relative;
  margin-top: 50px;

  @media (max-width: 1000px) {
    display: ${(props) => props.hideOnMobile && "none"};
  }

  @media (min-width: 1000px) {
    grid-column: span ${(props) => (props.span === "5" ? "5/13" : "6")};
    margin-top: ${(props) => (props.marginTop ? props.marginTop : "70px")};
    box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : "0px 0px 20px black")};
  }
`;

const SectionContent = styled.div`
  background-image: ${(props) =>
      props.noFilter === true
        ? "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))"
        : "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"},
    url(${(props) => props.bgImage && props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  white-space: pre-line;
  border-radius: 1px;

  h2 {
    margin: 0;
    padding-top: 20px;
    font-size: 60px;
    color: #f9e3e4;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 0 5px rgba(0, 0, 0, 0.4),
      0 0 30px rgba(0, 0, 0, 0.7);

    @media (min-width: 1100px) {
      position: absolute;
      top: 50px;
      padding-top: 0;
      box-shadow: 0px 0px 20px black;
    }
  }

  p {
    color: #f9e3e4;
    text-align: center;
    line-height: 1.6;
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    padding: 0 10px;
    font-weight: 600;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 0 5px rgba(0, 0, 0, 0.4),
      0 0 30px rgba(0, 0, 0, 0.7);

    @media (min-width: 730px) {
      padding: 0 50px;
    }
    @media (max-width: 600px ) {
      font-size: 13px;
    }
  }
`;

const SectionComponent = ({
  title,
  spanText,
  bgImage,
  imgProportion,
  span,
  marginTop,
  paddingTop,
  shading,
  boxShadow,
  hideOnMobile,
  id,
  altText,
  noFilter,
}) => {
  return (
    <>
      <SectionWrapper
        imgProportion={imgProportion}
        span={span}
        marginTop={marginTop}
        paddingTop={paddingTop}
        boxShadow={boxShadow}
        hideOnMobile={hideOnMobile}
        id={id}
      >
        <SectionContent bgImage={bgImage} shading={shading} noFilter={noFilter}>
          {/* Detta är istället för alt-tagg för bakgrundsbilden */}
          <span
            className="background-image"
            role="img"
            aria-label={altText}
          ></span>
          <h2>{title}</h2>
          <p>{spanText}</p>
        </SectionContent>
      </SectionWrapper>
    </>
  );
};

export default SectionComponent;
