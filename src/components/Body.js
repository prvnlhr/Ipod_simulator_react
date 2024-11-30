import React, { useState, useEffect, useRef } from "react";
import Display from "./Display";
import Wheel from "./Wheel";
import style from "../css/body.module.css";
import song1 from "../audio/hymn.mp3";
import song2 from "../audio/stillLearning.mp3";
import song3 from "../audio/dancing.mp3";
import song4 from "../audio/holdOn.mp3";
import art1 from "../img/hymn.jpg";
import art2 from "../img/stillLearning.jpg";
import art3 from "../img/dancing.jpg";
import art4 from "../img/holdOn.jpg";

const Body = () => {
  const [colorScheme, setColorScheme] = useState(0);

  const [audio, setAudio] = useState({
    audio: null,
    currentTime: 0,
    duration: 0,
    progressWidth: 0,
  });
  useEffect(() => {
    var x = document.getElementById("audio");
    setAudio({
      audio: x,
      currentTime: 0,
      duration: 0,
    });
  }, []);

  const [mainMenuIndex, setMainMenuIndex] = useState(0);
  const [musicMenuIndex, setMusicMenuIndex] = useState(0);
  const [allSongIndex, setAllSongIndex] = useState(0);
  const [albumsIndex, setAlbumsIndex] = useState(0);
  const [albumSongIndex, setAlbumSongIndex] = useState(0);
  const [activeDisplay, setActiveDisplay] = useState("menu");
  const [playStatus, setPlayStatus] = useState(false);
  const currAlbumName = useRef("");
  const [currSong, setCurrSong] = useState({
    trackName: "",
    artists: "",
    album: "",
  });
  const [currAlbum, setCurrAlbum] = useState({
    albumName: "",
  });

  // const [tracks, setTrack] = useState({
  //   allSongs: [
  //     {
  //       trackName: "Hymn",
  //       artists: "Coldplay",
  //       album: "Self Portrait",
  //       source: song1,
  //       art: art1,
  //     },
  //     {
  //       trackName: "Still Learning",
  //       artists: "Halsey",
  //       album: "Manic",
  //       source: song2,
  //       art: art2,
  //     },

  //     {
  //       trackName: "Dancing with your ghost",
  //       artists: "Sasha Sloan",
  //       album: "Self Portrait",
  //       source: song3,
  //       art: art3,
  //     },

  //     {
  //       trackName: "Hold On",
  //       artists: "Chord OverStreet",
  //       album: "Manic",
  //       source: song4,
  //       art: art4,
  //     },
  //   ],
  // });

  const songsArray = [
    {
      trackName: "Hymn",
      artists: "Coldplay",
      album: "Self Portrait",
      source: song1,
      art: art1,
    },

    {
      trackName: "Still Learning",
      artists: "Halsey",
      album: "Manic",
      source: song2,
      art: art2,
    },

    {
      trackName: "Dancing with your ghost",
      artists: "Sasha Sloan",
      album: "Self Portrait",
      source: song3,
      art: art3,
    },

    {
      trackName: "Hold On",
      artists: "Chord OverStreet",
      album: "Manic",
      source: song4,
      art: art4,
    },
  ];
  let albumsArray = {};

  songsArray.forEach(function (a) {
    albumsArray[a.album] = albumsArray[a.album] || [];
    albumsArray[a.album].push({ trackName: a.trackName, artists: a.artists });
  });
  let albums = [];
  for (var key in albumsArray) {
    albums.push(key);
  }

  return (
    <div
      className={
        colorScheme === 0
          ? style.color1
          : colorScheme === 1
          ? style.color2
          : colorScheme === 2
          ? style.color3
          : colorScheme === 3
          ? style.color4
          : null
      }
    >
      <audio id="audio">
        <source id="song-source" src=""></source>
      </audio>

      <Display
        activeDisplay={activeDisplay}
        audio={audio}
        currSong={currSong}
        setCurrSong={setCurrSong}
        mainMenuIndex={mainMenuIndex}
        musicMenuIndex={musicMenuIndex}
        allSongIndex={allSongIndex}
        songsArray={songsArray}
        albumsArray={albumsArray}
        albumsList={albums}
        albumsIndex={albumsIndex}
        currAlbum={currAlbum}
        albumSongIndex={albumSongIndex}
        setAlbumsIndex={setAlbumsIndex}
        colorScheme={colorScheme}
      />
      <Wheel
        activeDisplay={activeDisplay}
        setActiveDisplay={setActiveDisplay}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
        setCurrSong={setCurrSong}
        songsList={songsArray}
        albumsArray={albumsArray}
        albumsList={albums}
        mainMenuIndex={mainMenuIndex}
        setMainMenuIndex={setMainMenuIndex}
        musicMenuIndex={musicMenuIndex}
        setMusicMenuIndex={setMusicMenuIndex}
        allSongIndex={allSongIndex}
        setAllSongIndex={setAllSongIndex}
        albumsIndex={albumsIndex}
        setAlbumsIndex={setAlbumsIndex}
        albumsArray={albumsArray}
        currAlbum={currAlbum}
        setCurrAlbum={setCurrAlbum}
        albumSongIndex={albumSongIndex}
        setAlbumSongIndex={setAlbumSongIndex}
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
        currAlbumName={currAlbumName}
      />
    </div>
  );
};

export default Body;
