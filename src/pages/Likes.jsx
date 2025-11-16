import PageHeader from "../components/pageHeader/PageHeader";
import bgImg from "../assets/image_05.jpg";
import InfoSection from "../components/infoSection/InfoSection";
import LikesSection from "../components/likesSection/LikesSection";

const Likes = () => {
  return (
    <article>
      <PageHeader titleOne="Min Liste" bgImg={bgImg} />
      <InfoSection title="Antal aktiviteter på listen:" />
      <LikesSection activity={activity}/>
    </article>
  );
};

export default Likes;
