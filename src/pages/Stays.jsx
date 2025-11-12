import PageHeader from "../components/pageHeader/PageHeader";
import bgImg from "../assets/image_01.jpg"
import InfoSection from "../components/infoSection/InfoSection";
import StayCards from "../components/stayCards/stayCards";


const Stays = () => {
  return (
    <article>
      <PageHeader title="Vores Ophold" bgUrl={bgImg} />
      <InfoSection page="Stays"></InfoSection>
      <StayCards />
    </article>
  );
};

export default Stays;
