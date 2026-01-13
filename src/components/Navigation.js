import { useState } from "react";
import { Link, scroller } from "react-scroll";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";
import FlickerAnimation from "./Flicker";
import useWindowWidth from "../utils/useWindowWidth";

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

  /* Removes blue outline on click for mobile */
  -webkit-tap-highlight-color: transparent;

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
  width: 100vw;
  height: 100vh;
  background: #f29699;
  z-index: 1111;

  @media (min-width: 1000px) {
    border-left: 2px solid #f8e3e3;
    width: 500px;
  }

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
  font-size: clamp(1.6rem, 2vw, 2vw);
  cursor: pointer;

  :hover {
    animation: ${FlickerAnimation} 5s linear 1;
    filter: drop-shadow(0 0 0.5rem rgba(243, 180, 182, 0.76));
    text-decoration: underline;
  }
`;

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const windowWidth = useWindowWidth();

  const handleNavClick = (target) => {
    setOpen(false);
    scroller.scrollTo(target, {
      duration: windowWidth > 1000 ? 200 : 0,
      smooth: true,
    });
  };

  const navigationTransition = useTransition(open, {
    config: {
      tension: 100,
      duration: windowWidth > 1000 ? 200 : 150,
      friction: windowWidth > 1000 ? 80 : 0,
    },
    from: {
      transform: windowWidth > 1000 ? "translateX(30%)" : "translateX(15%)",
      opacity: 0,
    },
    enter: { transform: "translateX(0%)", opacity: 1 },
    leave: {
      transform: windowWidth > 1000 ? "translateX(30%)" : "translateX(15%)",
      opacity: 1,
    },
  });

  return (
    <>
      <Hamburger
        type="button"
        aria-label="Open the menu"
        onClick={() => setOpen(open ? false : true)}
      >
        <HamburgerLinesContainer>
          <div></div>
          <div></div>
          <div></div>
        </HamburgerLinesContainer>
      </Hamburger>
      {navigationTransition(
        (style, item, key) =>
          item && (
            <MenuOpen style={style} key={key}>
              <ul>
                <li>
                  <StyledLink onClick={() => handleNavClick("menuSection")}>
                    Meny
                  </StyledLink>
                </li>
                <li>
                  <StyledLink onClick={() => handleNavClick("visitUsSection")}>
                    Öppettider
                  </StyledLink>
                </li>
                <li>
                  <StyledLink onClick={() => handleNavClick("cateringSection")}>
                    Om oss
                  </StyledLink>
                </li>
              </ul>
            </MenuOpen>
          )
      )}
    </>
  );
};

export default Navigation;
