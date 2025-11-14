import styles from "./button.module.css";

// Komponenten tager imod 3 props fra dens parentkomponent. Der tildeles en ekstra klasse hvis variant sendes med. Denne styles der på i module.css.
const Button = ({ buttonIcon, buttonText, onClick, variant = "default" }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {buttonText && <p>{buttonText}</p>}
      {buttonIcon && <i class={buttonIcon}></i>}
    </button>
  );
};

export default Button;
