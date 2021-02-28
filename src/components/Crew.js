import React from 'react';
import crewImage from '../images/crew.jpg';
import SectionComponent from './SectionComponent';

const Crew = () => {
    return (
        <SectionComponent bgImage={crewImage} imgProportion={'130.5%'} span={'5'} marginTop={'-419px'} />
    )
}

export default Crew;