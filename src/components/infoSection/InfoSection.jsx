import Button from "../button/Button";
import styles from "./infoSection.module.css";
import gitte from "../../assets/gitte.jpg";

const InfoContent = {
  Home: {
    title: "Kom og prøv glamping hos Gitte",
    body: "Vi er stolte af at byde dig velkommen til Gitte’s Glamping, hvor hjertevarme og omsorg møder naturens skønhed og eventyr. Voresdedikerede team, anført af Gitte selv, er her for at skabe den perfekte ramme om din luksuriøse udendørsoplevelse. Vi stræber efter at skabe minder og fordybelse, uanset om du besøger os som par, familie eller soloeventyrer. Vi tilbyder en bred vifte af aktiviteter og arrangementer, der passer til alle aldre og interesser. Udforsk naturen, slap af ved bålet, del historier med nye venner, eller find indre ro med vores wellnessaktiviteter.",
    buttonText: "Se vores ophold",
    image: gitte
  },
  Stays: {
    title: "Vi har ophold til enhver smag",
    body: "Vores glampingophold er skabt til at tilbyde en kombination af eventyr og afslapning. Det er den ideelle flugt fra byens støj og stress, og det perfekte sted at genoplade batterierne i en naturskøn indstilling. Book dit ophold i dag og giv dig selv lov til at fordybe dig i naturen og nyde luksus i det fri. Vi ser frem tid at byde dig velkommen til en oplevelse fyldt med komfort, eventyr og skønhed.",
  },
};

const InfoSection = ({page}) => {

  const Content = InfoContent[page] || null;

      return (
        <section className={styles.infoSection}>
          <h2>{Content.title}</h2>
          <p>{Content.body}</p>
          {Content.image && <img src={Content.image} alt="Gitte" />}
          {Content.buttonText && <Button buttonText={Content.buttonText} />}
        </section>
      );


    };

export default InfoSection;