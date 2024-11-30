import React, { useEffect } from "react";
import styles from "../css/display.module.css";
import AlbumItem from "./AlbumItem";

const Albums = ({ albumsArray, albumsIndex, setAlbumsIndex, albumsList }) => {
  let albums = [];
  for (var key in albumsArray) {
    albums.push(key);
  }

  return (
    <div className={styles.displayMenu}>
      <p className={styles.menuHeading}>Albums</p>
      {albums.map((item) => (
        <>
          <AlbumItem item={item} albumsIndex={albumsIndex} albumsList={albumsList} />
        </>
      ))}
    </div>
  );
};

export default Albums;
