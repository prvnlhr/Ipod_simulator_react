import React, { useRef } from "react";
import ZingTouch from "zingtouch";
import styles from "../css/wheel.module.css";
import btnStyles from "../css/buttons.module.css";

import {
  BsFillSkipForwardFill,
  BsSkipBackwardFill,
  BsPlayFill,
  BsPauseFill,
} from "react-icons/bs";

const Wheel = ({
  activeDisplay,
  setActiveDisplay,
  playStatus,
  setPlayStatus,
  setCurrSong,
  songsList,
  albumsArray,
  mainMenuIndex,
  setMainMenuIndex,
  musicMenuIndex,
  setMusicMenuIndex,
  allSongIndex,
  setAllSongIndex,
  albumsIndex,
  setAlbumsIndex,
  currAlbum,
  setCurrAlbum,
  albumSongIndex,
  setAlbumSongIndex,
  albumsList,
  setColorScheme,
  currAlbumName,
}) => {
  // Using react Hooks useRef to store variable for menu toggling
  // we can use useState but useState take time to update and value is not reflected immediately

  const index = useRef(0);
  const i = useRef(0);
  const j = useRef(0);
  const k = useRef(0);
  const l = useRef(0);
  const m = useRef(0);
  const sIndex = useRef(0);
  const nextSongPlayRange = useRef(0);
  const isAlbums = useRef(false);
  const display = useRef("menu");

  const togglePlay = async () => {
    var x = document.getElementById("audio");
    if (playStatus) {
      x.pause();
      setPlayStatus(!playStatus);
    } else {
      x.play();
      setPlayStatus(!playStatus);
    }
  };

  // ::Function that will toggle menu Items wheel is rotated ::
  //____TOGGLE MENU_____________________________________________
  const toggleList = (dir) => {
    //____CLOCKWISE____________________________________________

    //___MAIN MENU________
    if (dir === "clockwise") {
      if (display.current === "menu") {
        if (i.current + 1 > 3) {
          i.current = 0;
          setMainMenuIndex(0);
        } else if (i.current + 1 <= 3) {
          i.current = i.current + 1;
          setMainMenuIndex((prev) => prev + 1);
        }
      }
      //___MUSIC MENU_________
      else if (display.current === "music") {
        if (j.current + 1 > 1) {
          j.current = 0;
          setMusicMenuIndex(0);
        } else if (j.current + 1 <= 1) {
          j.current = j.current + 1;
          setMusicMenuIndex((prev) => prev + 1);
        }
      }

      //____ALL SONGS MENU_____________
      else if (display.current === "allSongs") {
        if (k.current + 1 > songsList.length - 1) {
          k.current = 0;
          setAllSongIndex(0);
        } else if (k.current + 1 <= songsList.length - 1) {
          k.current = k.current + 1;
          setAllSongIndex((prev) => prev + 1);
        }
      }

      //____ALBUMS MENU___________________
      else if (display.current === "albums") {
        if (l.current + 1 > albumsList.length - 1) {
          l.current = 0;
          setAlbumsIndex(0);
        } else if (l.current + 1 <= albumsList.length - 1) {
          l.current = l.current + 1;
          setAlbumsIndex((prev) => prev + 1);
        }
      }
      //____ALBUMS SUB MENU__________
      else if (display.current === "albumsSubMenu") {
        if (m.current + 1 > albumsArray[currAlbumName.current].length - 1) {
          m.current = 0;
          setAlbumSongIndex(0);
        } else if (
          m.current + 1 <=
          albumsArray[currAlbumName.current].length - 1
        ) {
          m.current = m.current + 1;
          setAlbumSongIndex((prev) => prev + 1);
        }
      } else if (display.current === "settings") {
        if (sIndex.current + 1 > 3) {
          setColorScheme(0);
          sIndex.current = 0;
        } else if (sIndex.current + 1 <= 3) {
          sIndex.current = sIndex.current + 1;
          setColorScheme((prev) => prev + 1);
        }
      }
    }
    //__________________________________________________________________________
    //_________ANTICLOCKWISE____________________________________________________
    else if (dir === "anticlockwise") {
      //___MAIN MENU______________
      if (display.current === "menu") {
        if (i.current - 1 < 0) {
          i.current = 3;
          setMainMenuIndex(3);
        } else if (i.current - 1 >= 0) {
          setMainMenuIndex((prev) => prev - 1);
          i.current = i.current - 1;
        }
      }
      //___MUSIC MENU_______
      else if (display.current === "music") {
        if (j.current - 1 < 0) {
          j.current = 1;
          setMusicMenuIndex(1);
        } else if (i.current - 1 >= 0) {
          setMusicMenuIndex((prev) => prev - 1);
          j.current = j.current - 1;
        }
      }
      //___ALL SONGS MENU____
      else if (display.current === "allSongs") {
        if (k.current - 1 < 0) {
          k.current = songsList.length - 1;
          setAllSongIndex(songsList.length - 1);
        } else if (k.current >= 0) {
          setAllSongIndex((prev) => prev - 1);
          k.current = k.current - 1;
        }
      }
      //____ALBUMS MENU_________
      else if (display.current === "albums") {
        if (l.current - 1 < 0) {
          l.current = albumsList.length - 1;
          setAlbumsIndex(albumsList.length - 1);
        } else if (l.current - 1 >= 0) {
          setAlbumsIndex((prev) => prev - 1);
          l.current = l.current - 1;
        }
      }
      //___ALBUM SONG_________
      else if (display.current === "albumsSubMenu") {
        if (m.current - 1 < 0) {
          m.current = albumsArray[currAlbumName.current].length - 1;
          setAlbumSongIndex(albumsArray[currAlbumName.current].length - 1);
        } else if (m.current - 1 >= 0) {
          setAlbumSongIndex((prev) => prev - 1);
          m.current = m.current - 1;
        }
      }
    }
    return;
  };

  //::Function that will handle middle btn clicked::
  //_____HANDLE MIDDLE BUTTON CLICK___________________________
  const middleBtnCLick = () => {
    //___MAIN MENU SELECTION_______
    if (display.current === "menu") {
      if (mainMenuIndex === 0) {
        display.current = "coverFlow";
        setActiveDisplay("coverFlow");
      } else if (mainMenuIndex === 1) {
        display.current = "music";
        setActiveDisplay("music");
      } else if (mainMenuIndex === 2) {
        display.current = "games";
        setActiveDisplay("games");
      } else if (mainMenuIndex === 3) {
        display.current = "settings";
        setActiveDisplay("settings");
      }
    }

    //___MUSIC MENU SELECTION_______
    else if (display.current === "music") {
      const displayItems = ["allSongs", "albums", "artists"];
      display.current = displayItems[musicMenuIndex];
      setActiveDisplay(displayItems[musicMenuIndex]);
    }

    //___SONG SELECTION_______
    else if (display.current === "allSongs") {
      display.current = "playScreen";
      setActiveDisplay("playScreen");
      var y = document.getElementById("song-source");
      y.src = songsList[allSongIndex].source;
      var x = document.getElementById("audio");
      setCurrSong({
        trackName: songsList[allSongIndex].trackName,
        artists: songsList[allSongIndex].artists,
        album: songsList[allSongIndex].album,
        coverArt: songsList[allSongIndex].art,
      });
      nextSongPlayRange.current = allSongIndex;
      x.load();
      setPlayStatus(true);
      x.play();
    }

    //___ALBUM SELECTION_______
    else if (display.current === "albums") {
      display.current = "albumsSubMenu";
      setActiveDisplay("albumsSubMenu");
      currAlbumName.current = albumsList[albumsIndex];
      setCurrAlbum({
        albumName: albumsList[albumsIndex],
      });
    }

    //__ALBUM SONG SELECTION_______
    else if (display.current === "albumsSubMenu") {
      const songName =
        albumsArray[currAlbum.albumName][albumSongIndex].trackName;
      let songToPlay = songsList.find((s) => s.trackName === songName);
      var y = document.getElementById("song-source");
      y.src = songToPlay.source;
      var x = document.getElementById("audio");
      display.current = "playScreen";
      setActiveDisplay("playScreen");
      isAlbums.current = true;
      setCurrSong({
        trackName: songToPlay.trackName,
        artists: songToPlay.artists,
        album: songToPlay.album,
        coverArt: songToPlay.art,
      });
      x.load();
      setPlayStatus(true);
      x.play();
    }
  };
  //:: function that will handle forward btn click::
  //____HANDLE FORWARD BUTTON CLICK__________________________
  const handleFwdClick = () => {
    if (playStatus === true) {
      if (nextSongPlayRange.current + 1 < songsList.length) {
        var y = document.getElementById("song-source");
        y.src = songsList[nextSongPlayRange.current + 1].source;
        var x = document.getElementById("audio");
        setAllSongIndex((prev) => prev + 1);
        setCurrSong({
          trackName: songsList[nextSongPlayRange.current + 1].trackName,
          artists: songsList[nextSongPlayRange.current + 1].artists,
          album: songsList[nextSongPlayRange.current + 1].album,
          coverArt: songsList[nextSongPlayRange.current + 1].art,
        });
        x.load();
        x.play();
        nextSongPlayRange.current = nextSongPlayRange.current + 1;
      }
    }
  };
  //__:: Function that will handle backward byn click::
  const handleBwdClick = () => {
    if (playStatus === true) {
      if (nextSongPlayRange.current - 1 >= 0) {
        var y = document.getElementById("song-source");
        y.src = songsList[nextSongPlayRange.current - 1].source;
        var x = document.getElementById("audio");

        setAllSongIndex((prev) => prev - 1);
        setCurrSong({
          trackName: songsList[nextSongPlayRange.current - 1].trackName,
          artists: songsList[nextSongPlayRange.current - 1].artists,
          album: songsList[nextSongPlayRange.current - 1].album,
          coverArt: songsList[nextSongPlayRange.current - 1].art,
        });
        x.load();
        x.play();
        nextSongPlayRange.current = nextSongPlayRange.current - 1;
      }
    }
  };

  //__:: Function that will handle Menu btn click::
  //__MENU BTN CLICKED________________________________________________
  const handleMenuBtnClicked = () => {
    if (
      display.current === "music" ||
      display.current === "games" ||
      display.current === "settings" ||
      display.current === "coverFlow"
    ) {
      display.current = "menu";
      setActiveDisplay("menu");
    } else if (
      display.current === "allSongs" ||
      display.current === "albums" ||
      display.current === "artists"
    ) {
      display.current = "music";
      setActiveDisplay("music");
    } else if (display.current === "playScreen" && isAlbums.current === false) {
      display.current = "allSongs";
      setActiveDisplay("allSongs");
    } else if (display.current === "albumsSubMenu") {
      display.current = "albums";
      setActiveDisplay("albums");
    } else if (isAlbums.current === true) {
      display.current = "albumsSubMenu";
      setActiveDisplay("albumsSubMenu");
      isAlbums.current = false;
    }
  };
  //___ ::Function that handle wheel rotate::
  const wheelRotate = () => {
    var containerElement = document.getElementById("container");
    var activeRegion = ZingTouch.Region(containerElement);
    var childElement = document.getElementById("btnRing");

    activeRegion.bind(
      childElement,
      "rotate",
      function (e) {
        var distance = e.detail.distanceFromLast;
        if (distance > 0) {
          if (index.current >= 200) {
            index.current = 100;
            toggleList("clockwise");
          } else {
            index.current = index.current + 1;
          }
        } else if (distance < 0) {
          if (index.current < 0) {
            index.current = 100;
            toggleList("anticlockwise");
          } else {
            index.current = index.current - 1;
          }
        }
      },
      { passive: false }
    );
  };
  return (
    <div className={styles.wheelUi} id="container">
      <div className={styles.buttonRing} id="btnRing" onMouseOver={wheelRotate}>
        <div className={btnStyles.menuBtnDiv} onClick={handleMenuBtnClicked}>
          <p className={btnStyles.menuBtn}>MENU</p>
        </div>
        <div className={btnStyles.frwdBtnDiv}>
          <BsFillSkipForwardFill
            className={btnStyles.btnIcon}
            onClick={handleFwdClick}
          />
        </div>
        <div className={btnStyles.bckwrdBtnDiv}>
          <BsSkipBackwardFill
            className={btnStyles.btnIcon}
            onClick={handleBwdClick}
          />
        </div>
        <div className={btnStyles.playPause} onClick={togglePlay}>
          <BsPlayFill className={btnStyles.btnIcon} />
          <BsPauseFill className={btnStyles.btnIcon} />
        </div>
        <div className={btnStyles.selectBtn} onClick={middleBtnCLick}></div>
      </div>
    </div>
  );
};

export default Wheel;
