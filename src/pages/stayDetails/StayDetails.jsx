import { useEffect, useState } from "react";
import styles from "./stayDetails.module.css";
import { useLocation, useParams } from "react-router";
import PageHeader from "../../components/pageHeader/PageHeader";
import InfoSection from "../../components/infoSection/InfoSection";
import Button from "../../components/button/Button";

const StayDetails = () => {
  const location = useLocation();

  const detailPage = location.pathname.startsWith("/stays/");
  console.log(detailPage);
  const [stay, setStay] = useState([]);

  // React Router henter id'et fra url'en
  const { id } = useParams();

  // Henter det specifikke stay fra api'et
  const fetchStayById = async () => {
    try {
      const response = await fetch(
        `https://glamping-rqu9j.ondigitalocean.app/stay/${id}`
      );

      const data = await response.json();
      setStay(data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // Indbygget hook fra React der sørger for, at funktionen kun køre én gang når komponenten renderes/mountes.
  // Medmindre der tilføjes en afhængighed.
  useEffect(() => {
    fetchStayById();
  }, []);

  console.log(stay);

  return (
    <article className={styles.stayDetails}>
      <PageHeader titleOne={stay.title} bgImg={stay.image} />
      <InfoSection
        description={stay.description}
        stayDetails={stay}
        title={"Tag væk en weekend, med én du holder af"}
      />
    </article>
  );
};

export default StayDetails;
