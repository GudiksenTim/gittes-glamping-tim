import PageHeader from "../components/pageHeader/PageHeader";
import bgImg from "../assets/image_01.jpg"
import InfoSection from "../components/infoSection/InfoSection";

const Stays = () => {
  return (
    <article>
      <PageHeader title="Vores Ophold" bgUrl={bgImg} />
      <InfoSection page="Stays"></InfoSection>
    </article>
  );
};

export default Stays;
