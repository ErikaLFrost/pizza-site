import pizzaImg from '../images/pizza-image.jpg';
import SectionComponent from './SectionComponent';

const PizzaImg = () => {
    return (
        <SectionComponent bgImage={pizzaImg} span={'5'} marginTop={'-390px'} paddingTop={'86.5%'}/>
    )
}

export default PizzaImg;