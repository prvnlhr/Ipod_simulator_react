import React from "react";
import styles from "../css/display.module.css";
import AlbumSong from "./AlbumSong";

const AlbumsSubMenu = ({ currAlbum, albumsArray, albumSongIndex }) => {
//   console.log(currAlbum.albumName);
  const albumSongs = albumsArray[currAlbum.albumName];
//   console.log(albumSongs);
  return (
    <div className={styles.displayMenu}>
      <p className={styles.menuHeading}>{currAlbum.albumName}</p>
      {albumSongs.map((song) => (
        <>
          <AlbumSong
            song={song}
            currAlbum={currAlbum}
            albumSongIndex={albumSongIndex}
            albumsArray={albumsArray}
          />
        </>
      ))}
    </div>
  );
};

export default AlbumsSubMenu;
