import { useState } from "react";
import Button from "../button/Button";
import styles from "./pageHeader.module.css";


const PageHeader = ({ logo, title, subtitle, bgUrl}) => {
  /* State variabel der deklares med Reacts indbyggede hook: useState. Dens initialvalue/standardværdi/defaultvalue er false */
  const [open, setOpen] = useState(false);

  // Funktion der setter state til dens modsatte, nuværende værdi.
  const toggle = () => {
    setOpen(!open);
  };



  return (
    <header
      className={styles.header}
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
    >
      {logo ? <img src={logo} alt="logo" /> : null}

      <h1>
        {title} <span> {subtitle}</span>
      </h1>

      {/* Vi sender 3 props videre med komponenten: Én til teksten, én til funktionen og én til dens style  */}
      {logo ? (
        <Button buttonText="Book nu" onClick={toggle} variant="transparent" />
      ) : null}
    </header>
  );
};

export default PageHeader;
