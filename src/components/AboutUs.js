import styled from 'styled-components';

const AboutUsWrapper = styled.div`
    grid-column: span 5/13;
    text-align: center;
    margin-top: -509px;
    padding: 18px 0;
    background-color: #f9e3e4;
    h2 {
        margin: 0;
        font-size: 60px;
    }
    p {
        color: black;
        text-align: center;
        line-height: 1.6;
        margin-top: 0;
        margin-bottom: .5rem;
        font-size: 1em;
        padding: 0 10px;
        font-weight: 600;
    }
    @media(max-width: 1000px) {
        grid-column: span 12;
        margin-top: 50px;
        background-color: transparent;
    }
`;

const AboutUsContent = styled.div`
    width: 100%;
    margin: 0 auto;
    @media(max-width: 1000px) {
        width: 80%;
    }
    @media(max-width: 425px) {
        width: 100%;
    }
`;

const AboutUs = () => {
    return (
        <AboutUsWrapper>
            <AboutUsContent>
                <h2>Om oss</h2>
                <p>
                    <p>{`Vi är tre vänner som bakar neapolitansk-inspirerad vegansk/vegetarisk pizza ut av högsta kvalitet & utan genvägar. \n`}</p>
                    <p>{`Det började med att vi genom vurmandet för god vegansk/vegetarisk mat, & gemensamt pizzanörderi valde att starta upp ett företag. \n`}</p>
                    <p>{`Från början åkte vi runt och krängde pizza med hjälp av en cykelvagn som seden utvecklades till en moped-bil och nu har vi äntligen flyttat in i en faktisk lokal! \n`}</p>
                    <p>{`Det har varit otroligt nervöst men minst lika kul att äntligen ha fått öppna. Vi är så stolta över att kunna leverera en riktigt god vegansk och vegetarisk pizza i Stockholm till ett rimligt pris.\n`}</p>
                    <p>{`Kom gärna förbi oss och smaka. \n`}</p>
                    <p>{`Varma hälsningar från gänget på Nonna!`}</p>
                </p>
            </AboutUsContent>
        </AboutUsWrapper>
    )
}

export default AboutUs;