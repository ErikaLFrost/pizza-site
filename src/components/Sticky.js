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
    z-index: 2;
    margin: 0;

    p{
        margin: 0;
        text-align: center;
        padding: 6px 0;
        font-family: 'Menlo';
        font-size: 20px;
    }
`;

const Sticky = () => {
    return (<StickyMenu>
                <p>Take Away - 070 123 45 67</p>
            </StickyMenu>)
}

export default Sticky;