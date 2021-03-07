import { useState } from 'react';
import { Link } from 'react-scroll';
import styled, { keyframes } from 'styled-components';
import { useTransition, animated } from 'react-spring'

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

const MenuOpen = styled(animated.div)`
    position: fixed;
    top: 0;
    right: 0px;
    width: 50vw;
    max-width: 500px;
    height: 100vh;
    background: #F29699;
    z-index: 1111;
    /* transition: right 300ms ease-in; */
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

const flicker = keyframes`
  from  { opacity: 0; }
  0%    { opacity: 1; }
  3%    { opacity: 0.4; }
  6%    { opacity: 1; }
  7%    { opacity: 0.4; }
  8%    { opacity: 1; }
  9%    { opacity: 0.4; }
  10%   { opacity: 1; }
  89%   { opacity: 1; }
  90%   { opacity: 0.4; }
  100%  { opacity: 0.4; }
  to    { opacity: 1; }
`;

const StyledLink = styled(Link)`
        color: white;
        text-decoration: none;
        font-size: clamp(1.6rem, 3vw, 3vw);
        cursor: pointer;
        filter: drop-shadow(0 0 0.5rem rgba(250, 0, 0, 0.76));
        :hover{
            animation: ${flicker} 5s linear infinite;
            color: #e66879;
            filter: drop-shadow(0 0 0.5rem rgba(243, 180, 182, 0.76));
        }
`;


const Navigation = () => {
    const [open, setOpen] = useState(false)

    const navigationTransition = useTransition(open, null, {
        config: { tension: 500, duration: 300, friction: 100 },
        from: { transform: 'translateX(30%)', opacity: 0 },
        enter: { transform: 'translateX(0%)', opacity: 1 },
        leave: { transform: 'translateX(30%)', opacity: 0 },
    })

    return (
        <>
            <Hamburger type="button" onClick={() => setOpen(open ? false : true)}>
                <HamburgerLinesContainer>
                    <div></div>
                    <div></div>
                    <div></div>
                </HamburgerLinesContainer>
            </Hamburger>
            {navigationTransition.map(({ item, props, key }) =>
                item && (
                    <MenuOpen style={props} key={key}>
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
                )
            )}
        </>
    )
}

export default Navigation;