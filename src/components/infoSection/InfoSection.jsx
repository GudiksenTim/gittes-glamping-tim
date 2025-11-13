import Button from "../button/Button";
import styles from "./infoSection.module.css";
import { useNavigate } from "react-router";

const InfoSection = ({ title, description, button, img, stayDetails, contact }) => {
  const navigate = useNavigate();
  console.log(stayDetails);
  return (
    <section className={styles.infoSection}>
      <h2>{title}</h2>
      <p>{description}</p>
      {img && <img src={img} alt='gitte' />}
      {button && (
        <Button
          buttonText='Se vores ophold'
          onClick={() => navigate("/stays")}
        />
      )}

      {stayDetails && (
        <div>
          <ul>
            {Array.isArray(stayDetails.includes)
            ? stayDetails.includes.map((li, index) => <li key={index}>{li}</li>)
            : typeof stayDetails.includes === "string"
            ? <li>{stayDetails.includes}</li>
            : null
            }
          </ul>
          <br/>
          <span>Pris {stayDetails.price},-</span> <br/>
          <Button buttonText="Book nu"/>
        </div>
      )}

      {contact && (
        <form>
          <label>Navn
            <input type="text"/>
          </label>
          <label>Email
            <input type="email"/>
          </label>
          <label>Hvad drejer henvendelsen om?
            <input type="text"/>
          </label>
          <label>Besked, Skriv datoer hvis det drejer sig om en booking
            <textarea></textarea>
          </label>

          <Button buttonText="Indsend"/>

        </form>
      )}
    </section>
  );
};

export default InfoSection;