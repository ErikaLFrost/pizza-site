import React from 'react';
import styled from 'styled-components';
import MerchImg from '../images/merch2.jpg'

const MerchWrapper = styled.div`
    grid-column: span 5;
    grid-column-end: 13;
    background: 
    linear-gradient(
    rgba(251, 205, 205, 0.52), 
    rgba(251, 205, 205, 0.52)
    ),
    url(${MerchImg});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 0;
    margin-top: 50px;
    padding-top: 116.5%;
    position: relative;
    @media(max-width: 1000px) {
        grid-column: span 12;
    }
`;

const MerchContent = styled.div`
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


const Merch = () => {
    return (
        <MerchWrapper>
            <MerchContent>
            <h2>Merch</h2>
                <span><p>Här finns det tröjor och grejer kom och köp!</p></span>
            </MerchContent>
        </MerchWrapper>)
}

export default Merch;
