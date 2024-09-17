import styled from "styled-components";
import VisitUsImg from "../images/pizzanonna2.jpeg";

const VisitUsWrapper = styled.div`
  background: linear-gradient(
      rgba(251, 205, 205, 0.5),
      rgba(251, 205, 205, 0.5)
    ),
    url(${VisitUsImg});

  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${VisitUsImg});

  background-size: cover;
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
    box-shadow: 0px 0px 20px black;
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
    font-size: 36px;
    color: #f9e3e4;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 0 5px rgba(0, 0, 0, 0.4),
      0 0 30px rgba(0, 0, 0, 0.7);
      @media (max-width: 500px) {
        font-size: 24px;
      }
  }

  span {
    text-align: center;
    padding: 0 20px;

    p {
      font-weight: 600;
      margin-top: 0;
      margin-bottom: 0.3rem;
      font-size: 1.1rem;
      color: #f9e3e4;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 0 5px rgba(0, 0, 0, 0.4),
        0 0 30px rgba(0, 0, 0, 0.7);
      
      

      @media (max-width: 600px ) {
        font-size: 0.8rem;
      }
    }
    a {
      color: #f29699;
      text-decoration: none;
    }
    
  }
  .mb-08 {
    margin-bottom: 0.8rem;
  }
`;

/* const Closed = styled.span`
  p {
    color: #89f189 !important;
    margin-top: 10px !important;
  }
`; */

const VisitUs = () => {
  return (
    <VisitUsWrapper id="visitUsSection">
      <VisitUsContent>
        <h2>Besök oss</h2>
        <span className="mb-08">
          <p>{`Södermalm - Blekingegatan 36`}</p>
        </span>

        {/* <Closed>
          <p>Stängt Midsommar: 25-26:e juni</p>
        </Closed> */}

<span className="mb-08">
          {/* <p>{`Sommaröppet fr.o.m 1/6 t.o.m 8/9: \n `}</p> */}
          <p>{`Onsdag - Fredag 12-20`}</p>
          <p>{`Lördag - Söndag 13-20`}</p>
          <p>{`( Eller tills degen tar slut )`}</p>
          <p>Öppettiderna kan variera och endast drop in på borden</p>
          <p>Håll koll på våra sociala medier <a href="https://www.instagram.com/lapiccolanonnapizza/?hl=en">Instagram</a> och <a href="https://www.facebook.com/lapiccolanonnapizza/">Facebook</a></p>
        </span>
        <span>
          <h2>Kontakta oss</h2>
          <p>Boka deg genom att komma förbi under våra öppettider</p>
          <p>Vid övriga frågor maila gärna <a href = "mailto: lapiccolanonna@gmail.com">lapiccolanonna@gmail.com</a></p>
        </span>
        
      </VisitUsContent>
    </VisitUsWrapper>
  );
};

export default VisitUs;
