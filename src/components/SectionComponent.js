import styled from 'styled-components';


const SectionWrapper = styled.div`
    grid-column: span 6;
    background: linear-gradient(
        rgba(251, 205, 205, 0.52), 
        rgba(251, 205, 205, 0.52)
        ),url(${props => props.bgImage && props.bgImage});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 0;
    margin-top: 50px;
    padding-top: 99.5%;
    position: relative;
    @media(max-width: 1000px) {
        grid-column: span 12;
    }
`;

const SectionContent = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    white-space: pre-line;
    h2{
        margin: 0;
        padding-top: 20px;
        font-family: 'PlatonickFont';
        font-size: 50px;
        text-shadow: 2px 2px 6px white;
    }
    span{
        text-align: center;
        p{
            margin-top: 0;
            margin-bottom: .5rem;
            font-size: 1rem;
            padding: 0 10px;
        }
    }
`;

const SectionComponent = ({ title, spanText, bgImage }) => {
    return (
        <SectionWrapper bgImage={bgImage}>
            <SectionContent>
                <h2>{title}</h2>
                <span>
                    <p>
                        {spanText}
                    </p>
                </span>
            </SectionContent>
        </SectionWrapper>
    )
}

export default SectionComponent;