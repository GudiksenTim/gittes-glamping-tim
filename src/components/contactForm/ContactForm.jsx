import Button from "../button/Button";
import styles from "./contactForm.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

const ContactForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Navn er påkrævet"),
    email: yup.string().email("Ugyldig email").required("Email er påkrævet"),
    subject: yup.string().required("Emne er påkrævet"),
    message: yup
      .string()
      .min(10, "Beskeden skal være på mindst 10 tegn")
      .required("Besked er påkrævet"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://glamping-rqu9j.ondigitalocean.app/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      console.log(response);

      if (!response.ok) {
        throw new Error("Serverfejl");
      } else {
        toast.success("Besked Sendt!")
        reset()
      }

    } catch (error) {
      console.log("Fejl:", error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        Navn
        <input type="text" {...register("name")} />
        {errors.name && (
          <span className={styles.error}>{errors.name.message}</span>
        )}
      </label>
      <label>
        Email
        <input type="email" {...register("email")} />
        {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
        )}
        </label>
      <label>
        Hvad drejer henvendelsen om?
        <input type="text" {...register("subject")} />
        {errors.subject && (
          <span className={styles.error}>{errors.subject.message}</span>
        )}
      </label>
      <label>
        Besked, Skriv datoer hvis det drejer sig om en booking
        <textarea {...register("message")}></textarea>
        {errors.message && (
          <span className={styles.error}>{errors.message.message}</span>
        )}
      </label>

      <Button buttonText={isSubmitting ? "Sender..." : "Indsend"} />
    </form>
  );
};

export default ContactForm;
