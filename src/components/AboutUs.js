import SectionComponent from "./SectionComponent";
import cateringImg from "../images/nonnapizza.jpg";

const aboutUsSpan = `Vi är två vänner som bakar Napolitansk vegansk/vegetarisk pizza av högsta kvalitet, utan genvägar.\n
Det började med att vi genom vurmandet för god vegansk och vegetarisk mat, samt gemensamt pizzanörderi, valde att starta ett företag. Från början åkte vi runt och krängde pizza med hjälp av en cykelvagn som sedan utvecklades till en moped-bil och nu har vi äntligen flyttat in i en lokal!\n
Vi är så stolta över att kunna leverera en riktigt god vegansk och vegetarisk pizza i Stockholm till ett rimligt pris. Kom gärna förbi oss och smaka.\n
Varma hälsningar från oss på Nonna!`;


const altText = `Pizza Loco`;

const AboutUs = () => {
  return (
    <SectionComponent
      /* title={cateringTitle} */
      spanText={aboutUsSpan}
      bgImage={cateringImg}
      span={"6"}
      shading={true}
      id={"cateringSection"}
      altText={altText}
    />
  );
};

export default AboutUs;
