import React from "react";
import styles from "../css/allSongs.module.css";
import { BiChevronRight } from "react-icons/bi";
const AlbumItem = ({ item, albumsIndex, albumsList }) => {
  return (
    <>
      <div
        className={
          albumsList[albumsIndex] === item ? styles.active : styles.inactive
        }
      >
        <p className={styles.menuText}>{item}</p>
        <BiChevronRight className={styles.icon} />
      </div>
    </>
  );
};

export default AlbumItem;
