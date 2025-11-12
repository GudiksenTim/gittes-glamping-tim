import styles from "./stayCard.module.css";
import Button from "../button/Button";

// Review er en child-komponent, som får data (props) fra forældre-komponenten
const stayCard = ({ stay }) => {
  return (
    <article className={styles.stayCard}>
      <header>
        <h4>{stay.title}</h4>
        <div>
            <p><span>{stay.people}</span>personer</p>
            <p>Fra <span>{stay.price}</span>,-</p>
        </div>
      </header>

      <img src={stay.imgSrc} alt={stay.title} />
      
      <Button buttonText="Læs Mere"></Button>

    </article>
  );
};

export default Review;