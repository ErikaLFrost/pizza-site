import styled from 'styled-components';
import crewImage from '../images/crew.jpg';
import SectionComponent from './SectionComponent';

const TextUnderImage = styled.div`
    grid-column: span 5/13;
    text-align: center;
    margin-top: -509px;
    padding: 18px 0;
    background-color: #cecdcd;
    h2 {
        margin: 0;
        font-size: 60px;
    }
    p {
        color: white;
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
        margin-top: 0px;
    }
`;

const Crew = () => {
    return (
        <TextUnderImage>
            <h2>Om oss</h2>
            <p>
                <p>{`Vi är tre vänner som bakar neapolitansk-inspirerad vegansk/vegetarisk pizza ut av högsta kvalitet & utan genvägar. \n`}</p>
                <p>{`Det började med att vi genom vurmandet för god vegansk/vegetarisk mat, & gemensamt pizzanörderi valde att starta upp ett företag. \n`}</p>
                <p>{`Från början åkte vi runt och krängde pizza med hjälp av en cykelvagn som seden utvecklades till en moped-bil och nu har vi äntligen flyttat in i en faktisk lokal! \n`}</p>
                <p>{`Det har varit otroligt nervöst men minst lika kul att äntligen ha fått öppna. Vi är så stolta över att kunna leverera en riktigt god vegansk och vegetarisk pizza i Stockholm till ett rimligt pris.\n`}</p>
                <p>{`Kom gärna förbi oss och smaka. \n`}</p>
                <p>{`Varma hälsningar från gänget på Nonna!`}</p>
            </p>
        </TextUnderImage>
    )
}

export default Crew;