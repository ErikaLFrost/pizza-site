import React from 'react';
import styled from 'styled-components';
import { useInstagramFeed } from 'use-instagram-feed';
import '../fonts/fonts';
import InstagramFeed from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

// const App = () => {
//   return (
//      <InstagramFeed token={your_token}  counter="6"/>
//   );
// };

console.log("InstagramFeed", InstagramFeed)

const token = "IGQVJYRWM3UWxULUU2QWttdWw5NTFScHU4VURUR2E4LVdNVDBCdnZAVb09wWFNCbDBLUXBZAWGxEbEJfc1dCcmtaYjdUYVlwbTAwZAkc2RFJtMVZAMeXpUVkJDbmZArbnBISWtjWWNnc0g2RTlBbmpyYllrTgZDZD";

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

const InstaFeedWapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
`;

const StyledInstaFeed = styled(InstagramFeed)`
    display: grid !important;
    div{
        display: grid !important;
        grid-template-columns: repeat(12, [col-start] 1fr);
        div{
            display: grid !important;
        grid-template-columns: repeat(12, [col-start] 1fr);
        }
    }

`;



const Insta = () => {
    return (
        <InstaWrapper>
            <FollowUs>
                <a href="https://www.instagram.com/lapiccolanonnapizza" target="_blank" rel="noreferrer">@piccolanonna</a>{"\n"}
            </FollowUs>
            {/* <InstaFeedWapper> */}
                <StyledInstaFeed token={token} counter="5" style="display:grid" />
            {/* </InstaFeedWapper> */}
        </InstaWrapper>)
}

export default Insta;