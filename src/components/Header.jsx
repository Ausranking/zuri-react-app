import React from 'react'
import "./header.css"
const header = () => {
  return (
    <header className="profile-section">
      <div class="icon">
        <img src="images/_Avatar share button.png" id="web-icon" alt="desktop share button" />
        <img src="images/share-button.png" id="mob-icon" alt="mobile share button" />
      </div>

      <div id="profile-img">
        <img src="images/IMG_20220327_131117_728 (2).jpg" id="profile_img_one" alt="Profile" />
        <img src="images/Device=Web, State=Hover.png" id="profile_img_two" hidden alt="profile" />
      </div>
      <h1 id="twitter">King Austin</h1>
      <h2 id="slack" hidden>Austin Nze</h2>
    </header>

  )
}

export default header
