import styled from 'styled-components';

const SynthwaveContainer = styled.div`
    position: relative;
    display: none;

    @media(min-width: 1000px) {
        display: block;
    }
`;

const Horizon = styled.div`
    background: linear-gradient(to bottom, #f9e3e4 0%, #F29699 100%);
    height: 20px;
    left: 0;
    position: absolute;
    right: 0;
    top: -250px;
    perspective: 30vh;
    z-index: -1;
`;

const Lines = styled.div`
    height: 100vh;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    background: linear-gradient(to bottom, transparent, transparent 40px, #f9e3e4 40px, #f9e3e4 42px), linear-gradient(to right, transparent, transparent 40px, #f9e3e4 40px, #f9e3e4 42px);
    transform-origin: 50% 0;
    transform: rotateX(60deg);
    background-size: 42px 42px;
`;

const Synthwave = () => {
    return (<>
        <SynthwaveContainer>
            <Horizon>
                <Lines />
            </Horizon>
        </SynthwaveContainer>
    </>
    )
}

export default Synthwave;