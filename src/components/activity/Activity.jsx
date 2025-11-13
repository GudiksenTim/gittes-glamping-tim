import Button from "../button/Button";
import styles from "./activity.module.css";

const Activity = ({ activity }) => {
  console.log(activity);

  return (
    <figure className={styles.activity}>
      <figcaption>
        <p className={styles.title}>{activity.title}</p>
      </figcaption>
      <img src={activity.image} alt={activity.title} />
      <div>
        <Button
          buttonText="Læs mere"
        />
      </div>
    </figure>
  );
};

export default Activity;
