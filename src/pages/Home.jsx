import InfoSection from "../components/infoSection/InfoSection";
import PageHeader from "../components/pageHeader/PageHeader";
import Reviews from "../components/reviews/Reviews";
import logo from "/logo.png"
import bgImg from "../assets/image_00.jpg"

const Home = () => {
  return (
    <article>
      <PageHeader
        logo={logo}
        title="Gittes"
        subtitle="Glamping"
        bgUrl={bgImg}
      />
      <InfoSection page="Home"/>
      <Reviews />
    </article>
  );
};

export default Home;
