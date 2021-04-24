import styled from "styled-components";

const AboutUsWrapper = styled.div`
  text-align: center;
  padding: 18px 0;
  border-radius: 5px;
  grid-column: span 12;
  margin-top: 25px;
  background-color: transparent;

  h2 {
    margin: 0;
    font-size: 60px;
  }

  p {
    text-align: center;
    line-height: 1.6;
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1em;
    padding: 0 10px;
    font-weight: 600;
  }

  @media (min-width: 1000px) {
    background-color: #f9e3e4;
    margin-top: -509px;
    grid-column: span 5/13;
  }
`;

const AboutUsContent = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const AboutUs = () => {
  return (
    <AboutUsWrapper id="aboutUsSection">
      <AboutUsContent>
        <h2>Om oss</h2>
        <div>
          <p>{`Vi är tre vänner som bakar napolitanskinspirerad vegansk/vegetarisk pizza av högsta kvalitet, utan genvägar. \n`}</p>
          <p>{`Det började med att vi genom vurmandet för god vegansk och vegetarisk mat, samt gemensamt pizzanörderi, valde att starta ett företag. \n`}</p>
          <p>{`Från början åkte vi runt och krängde pizza med hjälp av en cykelvagn som sedan utvecklades till en moped-bil och nu har vi äntligen flyttat in i en lokal! \n`}</p>
          <p>{`Det har varit otroligt nervöst, men minst lika kul, att äntligen ha öppnat! Vi är så stolta över att kunna leverera en riktigt god vegansk och vegetarisk pizza i Stockholm till ett rimligt pris.\n`}</p>
          <p>{`Kom gärna förbi oss och smaka. \n`}</p>
          <p>{`Varma hälsningar från gänget på Nonna!`}</p>
        </div>
      </AboutUsContent>
    </AboutUsWrapper>
  );
};

export default AboutUs;
