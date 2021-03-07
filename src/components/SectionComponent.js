import styled from 'styled-components';


const SectionWrapper = styled.div`
    grid-column: span ${props => props.span === '5' ? '5/13' : '6'};
    width: 100%;
    height: 0;
    margin-top: ${props => props.marginTop ? props.marginTop : '70px'} ;
    padding-top: ${props => props.imgProportion ? props.imgProportion : '99.5%'};
    position: relative;

    @media(max-width: 1000px) {
        grid-column: span 12;
        margin-top: 50px;
        display: ${props => props.hideOnMobile && 'none'};
    }
`;

const SectionContent = styled.div`
    background: ${props => props.shading && 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))'};
    background-image: url(${props => props.bgImage && props.bgImage});
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
    border-radius: 5px;

    h2 {
        margin: 0;
        padding-top: 20px;
        font-size: 60px;
        color: #f9e3e4;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 0 5px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 0, 0, 0.7);
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

const SectionComponent = ({ title, spanText, bgImage, imgProportion, span, marginTop, paddingTop, shading, hideOnMobile, id }) => {
    return (<>
        <SectionWrapper imgProportion={imgProportion} span={span} marginTop={marginTop} paddingTop={paddingTop} hideOnMobile={hideOnMobile} id={id}>
            <SectionContent bgImage={bgImage} shading={shading}>
                {/* Detta är istället för alt-tagg för bakgrundsbilden */}
                <span className="background-image" role="img" aria-label="[Här får vi skicka in en prop]"></span>
                <h2>{title}</h2>
                <p>
                    {spanText}
                </p>
            </SectionContent>
        </SectionWrapper>
    </>
    )
}

export default SectionComponent;