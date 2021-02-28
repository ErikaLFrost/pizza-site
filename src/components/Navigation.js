import React, { useState } from 'react';
import styled from 'styled-components';

const Hamburger = styled.button`
content: "HALLÅ";
height: 200px;
width: 200px;
`;

const MenuOpen = styled.div`
    position: fixed;
    top: 0;
    right: ${props => props.showNav ? '0' : '-100%'};
    width: 100%;
    height: 50vh;
    background: green;
    z-index: 11;

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    a {
        color: black;
    }
`;

const Navigation = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Hamburger onClick={() => setOpen(open ? false : true)} />
            {open && "HALLOJ"}
            <MenuOpen showNav={open}>
                <ul>
                    <li><a href="/">Link 1</a></li>
                    <li><a href="/">Link 1</a></li>
                    <li><a href="/">Link 1</a></li>
                    <li><a href="/">Link 1</a></li>
                </ul>
            </MenuOpen>
        </>
    )
}

export default Navigation;