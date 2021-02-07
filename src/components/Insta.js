import React from 'react';
import styled from 'styled-components';

const InstaWrapper = styled.div`
    grid-column: span 12;
    height: 50vw;
    background-color: blue;
`;


const Insta = () => {
    return (
        <InstaWrapper>
            Här kommer det instagrejer
        </InstaWrapper>)
}

export default Insta;