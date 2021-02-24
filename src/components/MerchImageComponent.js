import React from 'react';
import styled from 'styled-components';

const MerchImage = styled.div`
    grid-column: span 5;
    grid-column-end: 13;
    background: url(${props => props.bgImage && props.bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 0;
    margin-top: 50px;
    padding-top: 116.5%;
    @media(max-width: 1000px) {
        grid-column: span 12;
`;

const MerchImageComponent = ({ merchImage }) => {
    return (
        <MerchImage bgImage={merchImage} />
    )
}

export default MerchImageComponent;