import styled from "styled-components";
import "../fonts/fonts";

const ClosedMenu = styled.div`
  width: 100%;
  height: auto;
  position: -webkit-sticky;
  position: fixed;
  bottom: 40px;
  left: 0;
  background-color: #f8e3e3;
  z-index: 8001;
  margin: 0;

  p {
    margin: 0;
    text-align: center;
    padding: 6px 0;
    font-size: 24px;
  }
  a {
    color: #f29699;
    text-decoration: none;
  }
  @media (min-width: 1000px) {
    height: 40px;
    top: 0;
  }
`;

const Closed = () => {
  return (
    <ClosedMenu>
      <p>
      Opening hours may vary - Keep an eye on our social media <a href="https://www.instagram.com/lapiccolanonnapizza/?hl=en">Instagram</a> and <a href="https://www.facebook.com/lapiccolanonnapizza/">Facebook</a>
      </p>
    </ClosedMenu>
  );
};

export default Closed;