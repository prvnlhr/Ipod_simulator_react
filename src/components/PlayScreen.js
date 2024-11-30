import React, { useEffect, useState } from "react";
import screenStyles from "../css/playScreen.module.css";

const PlayScreen = ({ audio, currSong }) => {
  audio.audio.addEventListener("timeupdate", (event) => {
    const { currentTime, duration } = event.srcElement;
    let progress = document.getElementById("progress");
    let currTimeSpan = document.getElementById("currTime");
    let endTimeSpan = document.getElementById("endTime");

    let progressTime = (currentTime / duration) * 100;
    if (progress) {
      progress.style.width = `${progressTime}%`;
    }

    var min_duration = Math.floor(duration / 60);
    var sec_duration = Math.floor(duration % 60);

    var min_current = Math.floor(currentTime / 60);
    var sec_current = Math.floor(currentTime % 60);

    if (currentTime && currTimeSpan) {
      currTimeSpan.textContent = `${min_current}:${sec_current}`;
    }

    if (duration && endTimeSpan) {
      endTimeSpan.textContent = `${min_duration}:${sec_duration}`;
    }
  });

  return (
    <div className={screenStyles.playScreenContainer}>
      <div className={screenStyles.songAttrDiv}>
        <div className={screenStyles.coverDiv}>
          <img className={screenStyles.artImg} src={currSong.coverArt} />
        </div>
        <div className={screenStyles.songNameDiv}>
          <p className={screenStyles.songName}>{currSong.trackName}</p>
          <p className={screenStyles.artistName}>{currSong.artists}</p>
        </div>
      </div>
      <div className={screenStyles.barContainer}>
        <div className={screenStyles.bar}>
          <div id="progress" className={screenStyles.progress}></div>
        </div>
        <div className={screenStyles.timeDiv}>
          <span id="currTime">0.0</span>
          <span id="endTime">0.00</span>
        </div>
      </div>
    </div>
  );
};

export default PlayScreen;
