import React from 'react';
import styled from 'styled-components';
import '../fonts/fonts';

const StickyMenu = styled.div`
    width: 100%;
    height: 40px;
    position: -webkit-sticky;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #A7A7A7;
    z-index: 700;
    margin: 0;

    p {
        margin: 0;
        text-align: center;
        padding: 6px 0;
        font-size: 24px;

        a {
            color: black;
            text-decoration: none;
            transition: color ease-in-out 200ms;

            &:hover {
                color: white;
                filter: drop-shadow(0px 0px 1px white);
            }
        }
    }
`;

const Sticky = () => {
    return (<StickyMenu>
                <p>Take Away - <a href="tel:+4673-234-74-55">073 234 74 55</a></p>
            </StickyMenu>)
}

export default Sticky;