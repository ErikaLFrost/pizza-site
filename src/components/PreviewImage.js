import styled from 'styled-components';
import pizzaImg from '../images/pizza-img.jpg';

const HiddenPreviewImage = styled.div`
    position: absolute;
    top: -750px;
    left: -1000px;
`;

const PreviewImage = () => {
    return (
        <HiddenPreviewImage>
            <img src={pizzaImg} alt="La Piccola Nonna Pizza" />
        </HiddenPreviewImage>
    )
}

export default PreviewImage;