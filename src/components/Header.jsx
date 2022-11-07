import React from "react";
import "./header.css";
const Header = () => {
  return (
    <header className="profile-section">
      <div className="icon">
        <img
          src="images/_Avatar share button.png"
          id="web-icon"
          alt="desktop share button"
        />
        <img
          src="images/share-button.png"
          id="mob-icon"
          alt="mobile share button"
        />
      </div>
      <img
        src="public\images\IMG-20221106-WA0015.jpg"
        id="profile_img"
        alt="Profile"
      />

      <h1 className="username">_kingaustinn</h1>
      <h2 id="slack">Austin</h2>
    </header>
  );
};

export default Header;
