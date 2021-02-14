import React from 'react';
import styled from 'styled-components';
import VisitUsImg from '../images/visit-us.jpg';

const VisitUsWrapper = styled.div`
    grid-column: span 5;
    background: 
    linear-gradient(
      rgba(251, 205, 205, 0.52), 
      rgba(251, 205, 205, 0.52)
    ),
    url(${VisitUsImg});
    background-size: contain;
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
    h2{
        margin: 0;
        padding-top: 20px;
        font-family: 'PlatonickFont';
    }
    span{
        text-align: center;
        p{
            margin-top: 0;
            margin-bottom: .5rem;
            font-size: 1.5rem;
        }
    }
`

const VisitUs = () => {
    return (
        <VisitUsWrapper>
            <VisitUsContent>
                <h2>Besök oss</h2>
                <span><p>{`
                    Södermalm \n`}</p>
                    <p>{`Vartoftagatan 49`}</p>
                </span>
                <span><p>{`
                    Öppet \n `}</p>
                    <p>{`Fre 13-20 \n `}</p>
                    <p>{`Lör 12-20 \n `}</p>
                    <p>{`Sön 12-20`}</p>
                </span>
            </VisitUsContent>
        </VisitUsWrapper >
    )
}

export default VisitUs;