import PageHeader from "../components/pageHeader/PageHeader";
import bgImg from "../assets/image_04.jpg";
import InfoSection from "../components/infoSection/InfoSection";
import ActivitiesSection from "../components/activitiesSection/ActivitiesSection";

const title = "Ingen skal kede sig hos Gitte"

const description =
  "Glamping er mere end blot en indkvartering - det er en mulighed for at fordybe dig i naturen og skabe minder, der varer livet ud. Uanset om du foretrækker en eventyrlig kanotur, en oplysende naturvandring, hjertevarm samvær omkring bålet, smagfulde oplevelser som vinsmagning eller morgenyoga, der giver dig indre ro og balance i naturens skød - vil vi hos Gittes Glamping imødekomme dine ønsker.";

// Stays.jsx er parent/forældre komponenten, fordi den er ansvarlig for PageHeader/child/barns visning
const Activities = () => {
  return (
    <article>
      <PageHeader titleOne="Aktiviteter" bgImg={bgImg} />
      <InfoSection
        title={title}
        description={description}
      />
      <ActivitiesSection/>
    </article>
  );
};

export default Activities;
