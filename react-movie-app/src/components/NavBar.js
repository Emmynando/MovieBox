import { Fragment, useState } from "react";
import styles from "./NavBar.module.css";

function NavBar(initialVal) {
  const [togNav, setTogNav] = useState(initialVal);

  const navHandler = function () {
    setTogNav(!initialVal);
    console.log("Here am I");
  };
  return (
    <Fragment>
      <nav className={styles.nav}>
        <div>
          <header className={styles.header}>Movie Box</header>
        </div>
        <a href="#" className={styles.toggle} onClick={navHandler}>
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </a>
        <div
          className={
            togNav
              ? styles["navbar-links"]
              : styles['navbarLinks.classlist.toggle("active")']
          }
        >
          <ul className={styles[".nav ul"]}>
            <li className={styles[".nav li"]}>Home</li>
            <li className={styles[".nav li"]}>Coming Soon</li>
            <li className={styles[".nav li"]}>Contact</li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}

export default NavBar;
