import { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Hamburger = styled.button`
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: transparent;
    border: 2px solid white;
    z-index: 9000;
    border-radius: 50%;
    padding: 0px 0 0 14px;
    width: 66px;
    height: 66px;
    border-left-color: green;
    border-right-color: red;
    cursor: pointer;

    :focus {
        outline: none;
    }
`;

const HamburgerLinesContainer = styled.div`
    background-color: transparent;

    div {
        width: 35px;
        height: 5px;
        background-color: white;
        margin: 6px 0;
        border-radius: 10px;
    }
`;

const MenuOpen = styled.div`
    position: fixed;
    top: 0;
    right: ${props => props.showNav ? '0' : '-100%'};
    width: 50vw;
    max-width: 500px;
    height: 100vh;
    background: #F29699;
    z-index: 1111;
    transition: right 300ms ease-in;
    border-left: 2px solid white;

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        position: absolute;
        top: 20%;
        display: block;
        width: 100%;
        text-align: center;

        li {
            padding: 10px 0;
        }
    }
`;

const StyledLink = styled(Link)`
        color: white;
        text-decoration: none;
        font-size: 20px;
        cursor: pointer;
`;


const Navigation = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Hamburger onClick={() => setOpen(open ? false : true)}>
                <HamburgerLinesContainer>
                    <div></div>
                    <div></div>
                    <div></div>
                </HamburgerLinesContainer>
            </Hamburger>
            {open}
            <MenuOpen showNav={open}>
                <ul>
                    <li>
                        <StyledLink activeClass="active" spy={true} onClick={() => setOpen(open ? false : true)} to="topSection" duration={200} smooth={true}>
                            Top
                            </StyledLink>
                    </li>
                    <li>
                        <StyledLink activeClass="active" spy={true} onClick={() => setOpen(open ? false : true)} to="menuSection" duration={200} smooth={true}>
                            Meny
                            </StyledLink>
                    </li>
                    <li>
                        <StyledLink activeClass="active" spy={true} onClick={() => setOpen(open ? false : true)} to="visitUsSection" duration={200} smooth={true}>
                            Öppettider
                            </StyledLink>
                    </li>
                    <li>
                        <StyledLink activeClass="active" spy={true} onClick={() => setOpen(open ? false : true)} to="cateringSection" duration={200} smooth={true}>
                            Catering
                            </StyledLink>
                    </li>
                    <li>
                        <StyledLink activeClass="active" spy={true} onClick={() => setOpen(open ? false : true)} to="merchSection" duration={200} smooth={true}>
                            Merchandise
                            </StyledLink>
                    </li>
                    <li>
                        <StyledLink activeClass="active" spy={true} onClick={() => setOpen(open ? false : true)} to="aboutUsSection" duration={200} smooth={true}>
                            Om oss
                            </StyledLink>
                    </li>
                </ul>
            </MenuOpen>
        </>
    )
}

export default Navigation;