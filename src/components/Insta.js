import styled from 'styled-components';
import '../fonts/fonts';
import InstagramFeed from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

/* Se index.css för mer styling */

const InstaWrapper = styled.div`
    grid-column: span 12;
    align-items: center;
    justify-content: center;
    background-color: #f9e3e4;
    padding-bottom: 32px;
    margin: 0 auto;
    padding-top: 10px;

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

const FollowUs = styled.h3`
    display: table;
    margin: 0 auto;
    font-family: 'Raleway';
    grid-column: span 12;
    text-align: center;
    font-size: 32px;
    padding: 20px;
    
    a {
        transition: color ease-in-out 200ms;
        color: black;
    }

    :hover {
        a {
            filter: drop-shadow(0px 0px 1px white);
            color: #f29699;
        }
    }
`;

const StyledInstaFeed = styled(InstagramFeed)`
   
`;

const Insta = () => {
    return (
        <InstaWrapper>
            <FollowUs>
                <a href="https://www.instagram.com/lapiccolanonnapizza" target="_blank" rel="noreferrer" title="Link to Instagram">@piccolanonna</a>{"\n"}
            </FollowUs>
            <StyledInstaFeed token={process.env.REACT_APP_API_TOKEN} counter="6" />
        </InstaWrapper>)
}

export default Insta;