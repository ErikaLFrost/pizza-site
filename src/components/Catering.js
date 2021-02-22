import React from 'react';
import styled from 'styled-components';
import LPNCar from '../images/La-Piccola-Nonna-car.JPG';

const CateringWrapper = styled.div`
    grid-column: span 5;
    background: 
    linear-gradient(
      rgba(251, 205, 205, 0.52), 
      rgba(251, 205, 205, 0.52)
    ),
    url(${LPNCar});
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

const CateringContent = styled.div`
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
            font-size: 1.5rem;
        }
    }
`


const Catering = () => {
    return (<CateringWrapper>
                <CateringContent>
                <h2>Catering</h2>
                <span><p>{`
                    Pellentesque feugiat neque quis neque laoreet gravida. Etiam quis dolor massa. Duis finibus sapien ipsum, eget dignissim tellus viverra ac. Donec ac turpis mi. Quisque eget maximus mi, faucibus condimentum sapien. Donec velit dolor, fermentum nec lectus ac, semper pellentesque leo. Morbi laoreet ut urna nec pharetra.`}</p>
                </span>
                </CateringContent>
            </CateringWrapper>)
} 

export default Catering;