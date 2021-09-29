import styled from "styled-components";
import "../fonts/fonts";

const ClosedMenu = styled.div`
  width: 100%;
  height: 80px;
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
  @media (min-width: 1000px) {
    height: 40px;
    top: 0;
  }
`;

const Closed = () => {
  return (
    <ClosedMenu>
      <p>
        Tillfälligt stängt från och med 2:a oktober pga flytt. Ses snart igen!
      </p>
    </ClosedMenu>
  );
};

export default Closed;