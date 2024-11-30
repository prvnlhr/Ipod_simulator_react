import React from "react";
import styles from "../css/display.module.css";
import { GrGamepad } from "react-icons/gr";

const Games = () => {
  return (
    <div className={styles.secondaryDisplayContainer}>
      <GrGamepad fontSize="80px" color="grey" />
    </div>
  );
};

export default Games;
