import Button from "../button/Button";
import styles from "./activity.module.css";

const Activity = ({ activity }) => {
  console.log(activity);

  return (
    <figure className={styles.activity}>
      <figcaption>
        <p>{activity.title}</p>
      </figcaption>
      <img src={activity.image} alt={activity.title} />
      <div>
        <section>
          <article>
            <h3>{activity.date}</h3>
            <h3>{activity.time}</h3>
          </article>
          <i class="bi bi-heart-fill"></i>
        </section>
        <Button buttonText="Læs mere" variant="transparent" />
        
        <p>{activity.description}</p>
        
      </div>
    </figure>
  );
};

export default Activity;
