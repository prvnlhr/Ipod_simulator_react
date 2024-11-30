import React, { useEffect } from "react";
import styles from "../css/display.module.css";
import Albums from "./Albums";
import AlbumsSubMenu from "./AlbumsSubMenu";
import AllSongs from "./AllSongs";
import Coverflow from "./Coverflow";
import Games from "./Games";
import Menu from "./Menu";
import Music from "./Music";
import PlayScreen from "./PlayScreen";
import Settings from "./Settings";
import coverflow from "../img/coverflow.jpg";
const Display = ({
  activeDisplay,
  audio,
  currSong,
  mainMenuIndex,
  musicMenuIndex,
  allSongIndex,
  songsArray,
  albumsArray,
  albumsList,
  albumsIndex,
  currAlbum,
  albumSongIndex,
  setAlbumsIndex,
  colorScheme,
}) => {
  return (
    <div className={styles.displayContainer}>
      <img className={styles.coverflowImg} src={coverflow} />
      {activeDisplay === "coverFlow" ? (
        <Coverflow />
      ) : activeDisplay === "menu" ? (
        <Menu mainMenuIndex={mainMenuIndex} />
      ) : activeDisplay === "music" ? (
        <Music musicMenuIndex={musicMenuIndex} />
      ) : activeDisplay === "games" ? (
        <Games />
      ) : activeDisplay === "settings" ? (
        <Settings colorScheme={colorScheme} />
      ) : activeDisplay === "allSongs" ? (
        <AllSongs allSongIndex={allSongIndex} songsArray={songsArray} />
      ) : activeDisplay === "albums" ? (
        <Albums
          albumsArray={albumsArray}
          albumsIndex={albumsIndex}
          setAlbumsIndex={setAlbumsIndex}
          albumsList={albumsList}
        />
      ) : activeDisplay === "playScreen" ? (
        <PlayScreen audio={audio} currSong={currSong} />
      ) : activeDisplay === "albumsSubMenu" ? (
        <AlbumsSubMenu
          currAlbum={currAlbum}
          albumsArray={albumsArray}
          albumSongIndex={albumSongIndex}
        />
      ) : null}
    </div>
  );
};

export default Display;
