import SectionComponent from "./SectionComponent";
import cateringImg from "../images/nonnapizza.jpg";

/* const cateringTitle = `Catering`; */

/* const cateringSpan2 = `Det går även att boka La Piccola Nonna för events och fest. Maila för mer infomation! Minimum beställning på 50 pizzor 
Avbokning senare än 48 timmar innan gig - tillkommer 2000 kr
Utanför tullarna - tillkommer en kostnad på 1000 kr
lapiccolanonna@gmail.com`; */

const cateringSpan = `Vi är två vänner som bakar napolitansk vegansk/vegetarisk pizza av högsta kvalitet, utan genvägar.\n
Det började med att vi genom vurmandet för god vegansk och vegetarisk mat, samt gemensamt pizzanörderi, valde att starta ett företag.\n
Från början åkte vi runt och krängde pizza med hjälp av en cykelvagn som sedan utvecklades till en moped-bil och nu har vi äntligen flyttat in i en lokal!\n
Det har varit otroligt nervöst, men minst lika kul, att äntligen ha öppnat! Vi är så stolta över att kunna leverera en riktigt god vegansk och vegetarisk pizza i Stockholm till ett rimligt pris.\n
Kom gärna förbi oss och smaka.\n
Varma hälsningar från oss på Nonna!`;


const altText = `Pizza Loco`;

const Catering = () => {
  return (
    <SectionComponent
      /* title={cateringTitle} */
      spanText={cateringSpan}
      bgImage={cateringImg}
      span={"6"}
      shading={true}
      id={"cateringSection"}
      altText={altText}
    />
  );
};

export default Catering;
