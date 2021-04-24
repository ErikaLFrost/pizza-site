import styled from "styled-components";
import "../fonts/fonts";

const StickyMenu = styled.div`
  width: 100%;
  height: 40px;
  position: -webkit-sticky;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #f8e3e3;
  z-index: 9001;
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
    }
  }
`;

const Sticky = () => {
  return (
    <StickyMenu>
      <p>
        Take Away - <a href="tel:+4673-234-74-55">073 234 74 55</a>
      </p>
    </StickyMenu>
  );
};

export default Sticky;
