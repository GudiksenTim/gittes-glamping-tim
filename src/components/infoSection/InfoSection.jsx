import Button from "../button/Button";
import ContactForm from "../contactForm/ContactForm";
import styles from "./infoSection.module.css";
import { useNavigate } from "react-router";

const InfoSection = ({ title, description, button, img, stayDetails, contact, countTitle}) => {
  const navigate = useNavigate();
  return (

    <section className={styles.infoSection}>
      <h2>{title}</h2>
      <h2>{countTitle}</h2>
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

      {contact && (<ContactForm/>)}

    </section>

  )
}


    

      




  

    

      

export default InfoSection;