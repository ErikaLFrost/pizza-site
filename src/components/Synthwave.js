import styled, { keyframes } from "styled-components";

const MoveUp = keyframes`
    0% { background-position: 0 0; }
	100% { background-position: 0 -100%; }
    `;

const SynthwaveContainer = styled.div`
  position: relative;
  display: none;

  @media (min-width: 1000px) {
    display: block;
  }
`;

const Horizon = styled.div`
  background: linear-gradient(to bottom, #f9e3e4 0%, #f29699 100%);
  height: 20px;
  left: 0;
  position: absolute;
  right: 0;
  top: -250px;
  perspective: 30vh;
  z-index: -1;
`;

const Lines = styled.div`
  height: 176px; /* 210 */
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  background: linear-gradient(
      to bottom,
      transparent,
      transparent 40px,
      #f9e3e4 40px,
      #f9e3e4 42px
    ),
    linear-gradient(
      to right,
      transparent,
      transparent 40px,
      #f9e3e4 40px,
      #f9e3e4 42px
    );
  transform-origin: 50% 0;
  transform: rotateX(60deg);
  background-size: 42px 42px;
  animation: ${MoveUp} 15s linear infinite;
`;

const Sun = styled.div`
  background: linear-gradient(to bottom, yellow 0%, orange 50%);
  border-radius: 50%;
  box-shadow: 0 0 10px 10px #f8e3e3;
  height: 500px;
  left: 50%;
  bottom: -130px;
  position: absolute;
  transform: translate(-50%, 40%);
  width: 500px;
  z-index: -1;
  clip: rect(-20px, 500px, 150px, 0px);
`;

const Synthwave = () => {
  return (
    <>
      <SynthwaveContainer>
        <Horizon>
          <Sun />
          <Lines />
        </Horizon>
      </SynthwaveContainer>
    </>
  );
};

export default Synthwave;
