import Button from "../button/Button";
import styles from "./contactForm.module.css"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

const ContactForm = () => {

    

    const schema = yup.object().shape({
        name: yup.string().required("Navn er påkrævet"),
        email: yup.string().email("Ugyldig email").required("Email er påkrævet"),
        subject: yup.string().required("Emne er påkrævet"),
        message: yup.string().min(10, "Beskeden skal være på mindst 10 tegn").required("Besked er påkrævet")
    })

    const { register, handleSubmit } = useForm({
      resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await fetch(
                "https://glamping-rqu9j.ondigitalocean.app/contact", {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(data),
                }
            )
        } catch (error) {
            console.log("Fejl:", error)
        }
    }

    return (
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          Navn
          <input type="text" {...register("name")} />
        </label>
        <label>
          Email
          <input type="email" {...register("email")} />
        </label>
        <label>
          Hvad drejer henvendelsen om?
          <input type="text" {...register("subject")} />
        </label>
        <label>
          Besked, Skriv datoer hvis det drejer sig om en booking
          <textarea {...register("message")}></textarea>
        </label>

        <Button buttonText="Indsend" />
      </form>
    );

}

export default ContactForm