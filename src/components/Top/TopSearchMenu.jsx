import React from "react";

const TopSearchMenu = () => {
  return (
    <div id="searchMenu" className="w3-bar-block w3-theme-d2 w3-large w3-hide">
      <input
        className="w3-bar-item w3-input"
        id="FooterSearch"
        placeholder="Пошук па сайце"
      ></input>
      <span className="w3-bar-item w3-button w3-padding w3-center w3-border-bottom">
        Шукаць
      </span>
      <span className="w3-bar-item">
        <input
          className="w3-check w3-margin-right"
          type="checkbox"
          name="testament"
          id="TestamentCheckbox"
        ></input>
        <label for="TestamentCheckbox">Новы Запавет</label>
      </span>
      <span className="w3-bar-item">
        <input
          className="w3-check w3-margin-right"
          type="checkbox"
          name="prayerbook"
          id="PrayerbookCheckbox"
        ></input>
        <label for="PrayerbookCheckbox">Малітоўнік</label>
      </span>
      <span className="w3-bar-item">
        <input
          className="w3-check w3-margin-right"
          type="checkbox"
          name="songbook"
          id="SongbookCheckbox"
        ></input>
        <label for="SongbookCheckbox">Спевы</label>
      </span>
      <span className="w3-bar-item w3-border-top">
        <input
          className="w3-check w3-margin-right"
          type="checkbox"
          name="lettercase"
          id="LetterCase"
        ></input>
        <label for="LetterCase">Улічваць рэгіст літар</label>
      </span>
    </div>
  );
};

export default TopSearchMenu;
