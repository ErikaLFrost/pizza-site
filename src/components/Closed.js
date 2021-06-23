import styled from "styled-components";
import "../fonts/fonts";

const ClosedMenu = styled.div`
  width: 100%;
  height: 40px;
  position: -webkit-sticky;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f8e3e3;
  z-index: 9001;
  margin: 0;

  p {
    margin: 0;
    text-align: center;
    padding: 6px 0;
    font-size: 24px;
  }
`;

const Closed = () => {
  return (
    <ClosedMenu>
      <p>
        Stängd Midsommar: 25-26:e juni
      </p>
    </ClosedMenu>
  );
};

export default Closed;