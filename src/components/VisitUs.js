import styled from "styled-components";
import VisitUsImg from "../images/visit-us.jpg";

const VisitUsWrapper = styled.div`
  background: linear-gradient(
      rgba(251, 205, 205, 0.5),
      rgba(251, 205, 205, 0.5)
    ),
    url(${VisitUsImg});

  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${VisitUsImg});

  background-size: contain;
  background-repeat: no-repeat;
  grid-column: span 12;
  margin-top: 50px;
  width: 100%;
  height: 0;
  padding-top: 99.5%;
  position: relative;

  @media (min-width: 1000px) {
    grid-column: span 5/13;
    margin-top: 0;
    border-radius: 5px;
  }
`;

const VisitUsContent = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  white-space: pre-line;

  h2 {
    margin: 0;
    font-size: 60px;
    padding-top: 20px;
    color: #f9e3e4;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 0 5px rgba(0, 0, 0, 0.4),
      0 0 30px rgba(0, 0, 0, 0.7);

    @media (min-width: 1100px) {
      position: absolute;
      top: 50px;
      padding-top: 0;
    }
  }

  span {
    text-align: center;

    p {
      font-weight: 600;
      margin-top: 0;
      margin-bottom: 0.5rem;
      font-size: 1.4rem;
      color: white;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 0 5px rgba(0, 0, 0, 0.4),
        0 0 30px rgba(0, 0, 0, 0.7);
    }
  }
`;

const Midsommar = styled.span`
  p {
    color: #89f189 !important;
    margin-top: 10px !important;
  }
`;

const VisitUs = () => {
  return (
    <VisitUsWrapper id="visitUsSection">
      <VisitUsContent>
        <h2>Besök oss</h2>
        <span>
          <p>{`
                    Södermalm \n`}</p>
          <p>{`Vartoftagatan 49`}</p>
        </span>

        <Midsommar>
          <p>Stängt Midsommar: 25-26:e juni</p>
        </Midsommar>

        <span>
          <p>{`
                    Öppet \n `}</p>
          <p>{`Fre 12-19 \n `}</p>
          <p>{`Lör 12-19 \n `}</p>
          <p>{`Sön 12-19`}</p>
        </span>
        
      </VisitUsContent>
    </VisitUsWrapper>
  );
};

export default VisitUs;
