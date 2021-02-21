import React from 'react';
import styled from 'styled-components';
import { useInstagramFeed } from 'use-instagram-feed';
import '../fonts/fonts';

const InstaWrapper = styled.div`
    grid-column: span 12;
    align-items: center;
    justify-content: center;
    div {
        padding: .1rem;
        @media(max-width: 1000px) {
            grid-column: span 4;
        }
    }
    a {
        color: black;
        text-decoration: none;
    }
    img {
        width: 100%;
        height: 100%
    }
`;

const InstaIframe = styled.iframe`
    width:100%;
    height: 66vw;
    border:0;
    overflow:hidden;
`

const FollowUs = styled.h1`
    font-family: 'Menlo', sans-serif;
    grid-column: span 12;
    text-align: center;
`;


const Insta = () => {
    return (
        <InstaWrapper>
            <FollowUs>
                <a href="https://www.instagram.com/lapiccolanonnapizza" target="_blank" rel="noreferrer">@piccolanonna</a>{"\n"}
            </FollowUs>
            <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
            <div>
                <InstaIframe src="//lightwidget.com/widgets/9a82d18904bd5a84bb917f8edd20745a.html" scrolling="no" allowtransparency="true"
                    className="lightwidget-widget"></InstaIframe>

            </div>
        </InstaWrapper>)
}

export default Insta;