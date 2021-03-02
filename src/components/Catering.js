import React from 'react';
import SectionComponent from './SectionComponent';
import cateringImg from '../images/La-Piccola-Nonna-car.JPG';

const cateringTitle = `Catering`;

const cateringSpan = `Det går även att boka La Piccola Nonna för events och fest. Maila för mer infomation! Minimum beställning på 50 pizzor 
Avbokning senare än 48 timmar innan gig - tillkommer 2000 kr
Utanför tullarna - tillkommer en kostnad på 1000 kr
lapiccolanonna@gmail.com`;


const Catering = () => {
    return (
        <SectionComponent title={cateringTitle} spanText={cateringSpan} bgImage={cateringImg} span={'6'} shading={true} id={'cateringSection'}/>
    )
}

export default Catering;