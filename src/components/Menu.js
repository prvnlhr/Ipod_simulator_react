import React, { useEffect } from "react";
import styles from "../css/display.module.css";
import menuStyles from "../css/menu.module.css";
import { BiChevronRight } from "react-icons/bi";

const Menu = ({ mainMenuIndex }) => {
  return (
    <div className={styles.displayMenu}>
      <p className={styles.menuHeading}>iPod.js</p>
      <div
        className={
          mainMenuIndex === 0 ? menuStyles.active : menuStyles.inactive
        }
      >
        <p className={menuStyles.menuText}>Cover flow</p>
        <BiChevronRight className={menuStyles.icon} />
      </div>
      <div
        className={
          mainMenuIndex === 1 ? menuStyles.active : menuStyles.inactive
        }
      >
        <p className={menuStyles.menuText}>Music</p>
        <BiChevronRight className={menuStyles.icon} />
      </div>
      <div
        className={
          mainMenuIndex === 2 ? menuStyles.active : menuStyles.inactive
        }
      >
        <p className={menuStyles.menuText}>Games</p>
        <BiChevronRight className={menuStyles.icon} />
      </div>
      <div
        className={
          mainMenuIndex === 3 ? menuStyles.active : menuStyles.inactive
        }
      >
        <p className={menuStyles.menuText}>Settings</p>
        <BiChevronRight className={menuStyles.icon} />
      </div>
    </div>
  );
};

export default Menu;
