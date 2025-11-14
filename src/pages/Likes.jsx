import PageHeader from "../components/pageHeader/PageHeader";
import bgImg from "../assets/image_05.jpg";
import InfoSection from "../components/infoSection/InfoSection";


const Likes = () => {
  return (
    <article>
      <PageHeader titleOne="Min Liste" bgImg={bgImg} />
      <InfoSection
        title="Antal aktiviteter på listen:"
      />
      
    </article>
  );
};

export default Likes;
