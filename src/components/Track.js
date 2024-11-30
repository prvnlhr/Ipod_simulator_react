import React, { useEffect } from "react";
import styles from "../css/allSongs.module.css";
import { BiChevronRight } from "react-icons/bi";

const Track = ({ iter, track, allSongIndex, songsArray }) => {
  return (
    <>
      <div
        className={
          songsArray[allSongIndex].trackName === track.trackName
            ? styles.active
            : styles.inactive
        }
      >
        <p className={styles.menuText}>{track.trackName}</p>
        <BiChevronRight className={styles.icon} />
      </div>
    </>
  );
};

export default Track;
