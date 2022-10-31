import React from 'react'
import "./header.css"
const Header = () => {
  return (
    <header className="profile-section">
      <div className="icon">
        <img src="images/_Avatar share button.png" id="web-icon" alt="desktop share button" />
        <img src="images/share-button.png" id="mob-icon" alt="mobile share button" />
      </div>

        <img src="images/IMG_20220327_131117_728 (2).jpg" id="profile_img" alt="Profile" />
      
      <h1 id="twitter">Austin</h1>
      <h2 id="slack" hidden>Austin Nze</h2>
    </header>

  )
}

export default Header
