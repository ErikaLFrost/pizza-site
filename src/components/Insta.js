import React from 'react';
import styled from 'styled-components';
import { useInstagramFeed } from 'use-instagram-feed';
import '../fonts/fonts';
import InstagramFeed from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

/* Se index.css för mer styling */

console.log("InstagramFeed", InstagramFeed)

const token = "IGQVJYRWM3UWxULUU2QWttdWw5NTFScHU4VURUR2E4LVdNVDBCdnZAVb09wWFNCbDBLUXBZAWGxEbEJfc1dCcmtaYjdUYVlwbTAwZAkc2RFJtMVZAMeXpUVkJDbmZArbnBISWtjWWNnc0g2RTlBbmpyYllrTgZDZD";

const InstaWrapper = styled.div`
    grid-column: span 12;
    align-items: center;
    justify-content: center;
    background-color: #f9e3e4;
    padding-bottom: 3rem;
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

const FollowUs = styled.h3`
    font-family: 'Raleway';
    grid-column: span 12;
    text-align: center;
    font-size: 40px;
    padding-top: 2rem;
    /* filter: drop-shadow(0px 0px 1px white); */
    
    a {
        transition: color ease-in-out 200ms;
        color: black;
    }

    :hover {
        a {
            filter: drop-shadow(0px 0px 1px white);
            color: white;
        }
    }
`;

const InstaFeedWapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
`;

const StyledInstaFeed = styled(InstagramFeed)`
    /* display: grid !important;
    div{
        display: grid !important;
        grid-template-columns: repeat(12, [col-start] 1fr);
        div{
            display: grid !important;
        grid-template-columns: repeat(12, [col-start] 1fr);
        }
    } */

`;

const Insta = () => {
    return (
        <InstaWrapper>
            <FollowUs>
                <a href="https://www.instagram.com/lapiccolanonnapizza" target="_blank" rel="noreferrer">@piccolanonna</a>{"\n"}
            </FollowUs>
            {/* <InstaFeedWapper> */}
                <StyledInstaFeed token={token} counter="4" /* style="display:grid" */ />
            {/* </InstaFeedWapper> */}
        </InstaWrapper>)
}

export default Insta;