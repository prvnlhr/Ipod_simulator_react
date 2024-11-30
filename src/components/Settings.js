import React from "react";
import styles from "../css/display.module.css";
import settingsStyle from "../css/settings.module.css";

const Settings = ({ colorScheme }) => {
  return (
    <div className={styles.secondaryDisplayContainer}>
      <div className={settingsStyle.settingsList}>
        <p className={settingsStyle.menuHeading}>Settings</p>
        <div
          className={
            colorScheme === 0
              ? settingsStyle.highLight
              : settingsStyle.notHighLight
          }
        >
          <p className={settingsStyle.colorTextSpaceGrey}>Space Grey</p>
        </div>

        <div
          className={
            colorScheme === 1
              ? settingsStyle.highLight
              : settingsStyle.notHighLight
          }
        >
          <p className={settingsStyle.colorTextRoseGold}>Rose Gold</p>
        </div>
        <div
          className={
            colorScheme === 2
              ? settingsStyle.highLight
              : settingsStyle.notHighLight
          }
        >
          <p className={settingsStyle.colorTextGreen}>Green</p>
        </div>
        <div
          className={
            colorScheme === 3
              ? settingsStyle.highLight
              : settingsStyle.notHighLight
          }
        >
          <p className={settingsStyle.colorTextSkyBlue}>Sky Blue</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
