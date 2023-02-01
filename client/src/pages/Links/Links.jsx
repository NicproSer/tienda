import React from "react";
import "./Links.css";

export const Links = () => {
  return (
    <div className="links">
      <div className="logo-links">
        <img src="https://i.ibb.co/DbkWm62/logo.png" alt="" align="center" />
      </div>
      <div className="links-buttons">
        <a
          href="https://api.whatsapp.com/send?phone=584124280352&text=Hola%20estoy%20interesada%20en...."
          className="cta"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
        <a
          href="https://open.spotify.com/playlist/1HedclSfxoINP9aqulujZ3?si=5Nr0gPIgT1mFByq0I9hZ6A"
          target="_blank"
          rel="noopener noreferrer"
          class="cta"
        >
          PlayList <i class="bx bxl-spotify"></i>
        </a>
      </div>
    </div>
  );
};
