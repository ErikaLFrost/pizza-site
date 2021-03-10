import aboutUsImg from '../images/baking.jpg';
import styled from 'styled-components';

const altText = `Juanita och Alessandra bakar pizza`;

const SectionWrapper = styled.div`
    width: 100%;
    height: 0;
    padding-top: 99.5%;
    position: relative;
    grid-column: span 12;
    margin-top: 50px;
    display: ${props => props.hideOnMobile && 'none'};
    border-radius: 0;

    h2 {
        margin: 0;
        padding-top: 20px;
        font-size: 60px;
        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5), 0 0 5px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.7);
    }

    p {
        color: white;
        text-align: center;
        line-height: 1.6;
        margin-top: 0;
        margin-bottom: .5rem;
        font-size: 1em;
        padding: 0 10px;
        font-weight: 600;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 0 5px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 0, 0, 0.7);
    }

    @media(min-width: 1000px) {
        border-radius: 5px;
        grid-column: span 6;
        margin-top: 71px;
    }
`;

const SectionContent = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    background-image: url(${aboutUsImg});
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    white-space: pre-line;
    filter: contrast(110%) brightness(120%);

    h2 {
        margin: 0;
        padding-top: 20px;
        font-size: 60px;
        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5), 0 0 5px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.7);
    }

    p {
        color: white;
        text-align: center;
        line-height: 1.6;
        margin-top: 0;
        margin-bottom: .5rem;
        font-size: 1em;
        padding: 0 10px;
        font-weight: 600;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 0 5px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 0, 0, 0.7);
    }
`;

const AboutUs = () => {
    return (<>
        <SectionWrapper >
            <SectionContent>
                <span className="background-image" role="img" aria-label={altText}></span>
            </SectionContent>
        </SectionWrapper>
    </>
    )
}

export default AboutUs;