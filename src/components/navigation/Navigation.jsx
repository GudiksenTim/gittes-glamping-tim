import { NavLink } from "react-router";
import styles from "./navigation.module.css";
import { useState } from "react";

/* Når brugeren klikker på fx /stays bliver Stays komponenten/siden vist - uden at siden genindlæses. 
Dvs at det er den samme html side der vises, men indholdet skifter alt efter hvad der står i url'en*/

const Navigation = () => {

  //useState funktion til at kontrollere toggle mellem vist/skjult menu med conditional statement i classname
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.navigation}>
      <NavLink to="/" className={styles.logo}>
        <img src="../../assets/gittes-logo.png" />
      </NavLink>
      <div
        className={`${styles.burger} ${open ? styles.open : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`${styles.menu} ${open ? styles.show : ""}`}>
        <li>
          <NavLink to="/" onClick={() => setOpen(!open)}>
            Forside
          </NavLink>
        </li>
        <li>
          <NavLink to="/stays" onClick={() => setOpen(!open)}>
            Ophold
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setOpen(!open)}>
            Kontakt
          </NavLink>
        </li>
        <li>
          <NavLink to="/activities" onClick={() => setOpen(!open)}>
            Aktiviteter
          </NavLink>
        </li>
        <li>
          <NavLink to="/likes" onClick={() => setOpen(!open)}>
            Min liste
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
