import PageHeader from "../components/pageHeader/PageHeader";
import bgImg from "../assets/image_05.jpg";
import InfoSection from "../components/infoSection/InfoSection";
import LikesSection from "../components/likesSection/LikesSection";

const Likes = ({activities, toggleLike}) => {

    const likedCount = activities.filter(activity => activity.liked).length

  return (
    <article>
      <PageHeader titleOne="Min Liste" bgImg={bgImg} />
      <InfoSection title="Antal aktiviteter på listen:" countTitle={likedCount}/>
      <LikesSection activities={activities} toggleLike={toggleLike}/>
    </article>
  );
};

export default Likes;
