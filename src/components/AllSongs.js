import React, { useState, useEffect } from "react";
import menuStyles from "../css/menu.module.css";
import styles from "../css/display.module.css";

import Track from "./Track";

const AllSongs = ({ iter, allSongIndex, songsArray }) => {
  return (
    <div className={styles.displayMenu}>
      <p className={styles.menuHeading}>All Songs</p>

      {songsArray.map((track) => (
        <>
          <Track
            key={track.source}
            track={track}
            songsArray={songsArray}
            allSongIndex={allSongIndex}
            iter={iter}
          />
        </>
      ))}
    </div>
  );
};
export default AllSongs;
