import React from "react";
import styles from "../css/allSongs.module.css";

const AlbumSong = ({ song, currAlbum, albumSongIndex, albumsArray }) => {
  const songName = albumsArray[currAlbum.albumName][albumSongIndex].trackName;
  return (
    <div
      className={song.trackName === songName ? styles.active : styles.inactive}
    >
      <p className={styles.menuText}>{song.trackName}</p>
    </div>
  );
};

export default AlbumSong;
