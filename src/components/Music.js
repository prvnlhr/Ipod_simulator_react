import React, { useEffect } from "react";
import styles from "../css/display.module.css";
import menuStyles from "../css/menu.module.css";
import { BiChevronRight } from "react-icons/bi";

const Music = ({ musicMenuIndex }) => {
  return (
    <div className={styles.displayMenu}>
      <p className={styles.menuHeading}>Music</p>

      <div
        className={
          musicMenuIndex === 0 ? menuStyles.active : menuStyles.inactive
        }
      >
        <p className={menuStyles.menuText}>All Songs</p>
        <BiChevronRight className={menuStyles.icon} />
      </div>
      <div
        className={
          musicMenuIndex === 1 ? menuStyles.active : menuStyles.inactive
        }
      >
        <p className={menuStyles.menuText}>Albums</p>
        <BiChevronRight className={menuStyles.icon} />
      </div>
      
    </div>
  );
};

export default Music;
