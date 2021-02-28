import React from 'react';
import aboutUsImg from '../images/baking.jpg';
import SectionComponent from './SectionComponent';

const aboutUsTitle = `Om oss`;

const aboutUsSpan =
    `Vi är tre vänner som bakar neapolitansk-inspirerad vegansk/vegetarisk pizza ut av högsta kvalitet & utan genvägar. Det började med att vi genom vurmandet för god vegansk/vegetarisk mat, & gemensamt pizzanörderi valde att starta upp ett företag. Från början åkte vi runt och krängde pizza med hjälp av en cykelvagn som seden utvecklades till en moped-bil och nu har vi äntligen flyttat in i en faktisk lokal! Det har varit otroligt nervöst men minst lika kul att äntligen ha fått öppna. Vi är så stolta över att kunna leverera en riktigt god vegansk och vegetarisk pizza i Stockholm till ett rimligt pris. Kom gärna förbi oss och smaka. 
    Varma hälsningar från gänget på Nonna!`


const AboutUs = () => {
    return (
        <SectionComponent title={aboutUsTitle} spanText={aboutUsSpan} bgImage={aboutUsImg} span={'6'} shading={true} />
    )
}

export default AboutUs;