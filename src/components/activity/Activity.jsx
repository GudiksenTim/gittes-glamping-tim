import { useState } from "react";
import Button from "../button/Button";
import styles from "./activity.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Activity = ({ activity }) => {
  console.log(activity);

  const [isShown, setShown] = useState(false)

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
          <Button
            buttonIcon="bi bi-heart-fill"
            onClick={onToggleLike}
            style={{
              color: activity.liked
                ? "rgba(255,255,255,1)"
                : "rgba(255,255,255,0.5)",
            }}
          />
        </section>
        <Button
          buttonText={isShown ? "Læs mindre" : "Læs mere"}
          variant="transparent"
          onClick={() => setShown(!isShown)}
        />

        {isShown && (
          <p style={{ padding: 20, fontFamily: "Zen Loop", fontSize: 25 }}>
            {activity.description}
          </p>
        )}
      </div>
    </figure>
  );
};

export default Activity;
