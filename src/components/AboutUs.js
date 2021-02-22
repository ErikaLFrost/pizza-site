import React from 'react';
import styled from 'styled-components';
import AboutUsImg from '../images/crew.jpg';

const AboutUsWrapper = styled.div`
    grid-column: span 6;
    background: 
    linear-gradient(
    rgba(251, 205, 205, 0.52), 
    rgba(251, 205, 205, 0.52)
    ),
    url(${AboutUsImg});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 0;
    margin-top: 50px;
    padding-top: 99.5%;
    position: relative;
    @media(max-width: 1000px) {
        grid-column: span 12;
    }
`;

const AboutUsContent = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    white-space: pre-line;
    h2{
        margin: 0;
        padding-top: 20px;
        font-family: 'PlatonickFont';
        font-size: 50px;
        text-shadow: 2px 2px 6px white;
    }
    span{
        text-align: center;
        p{
            margin-top: 0;
            margin-bottom: .5rem;
            font-size: 1rem;
            padding: 0 10px;
        }
    }
`;


const AboutUs = () => {
    return (
        <AboutUsWrapper>
            <AboutUsContent>
                <h2>Om oss</h2>
                <span><p>Vi är tre vänner som bakar neapolitansk-inspirerad vegansk/vegetarisk pizza utav högsta kvalitet & utan genvägar.
                Det började med att vi genom vurmandet för god vegansk/vegetarisk mat, & gemensamt pizzanörderi valde att starta upp ett företag. 
                Från början åkte vi runt och krängde pizza med hjälp av en cykelvagn som seden utvecklades till en moped-bil och nu har vi äntligen flyttat in i en faktisk lokal!
                Det har varit otroligt nervöst men minst lika kul att äntligen ha fått öppna. Vi är så stolta över att kunna leverera en riktigt god vegansk och vegetarisk pizza i Stockholm till ett rimligt pris. Kom gärna förbi oss och smaka.
                Varma hälsningar från gänget på nonna!</p></span>
            </AboutUsContent>
        </AboutUsWrapper>)
}

export default AboutUs;