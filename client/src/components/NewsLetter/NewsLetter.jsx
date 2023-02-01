import React from "react";
import "./NewsLetter.css";
import { useNavigate } from "react-router-dom";

export const NewsLetter = () => {
  const navigate = useNavigate();
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">
          Inscríbete para recibir las últimas actualizaciones y ofertas
        </span>
        <div className="form">
          <input type="email" placeholder="Email" />
          <button>Suscribirse</button>
        </div>
        <div className="text">
          Se utilizará de acuerdo con nuestra{" "}
          <strong
            onClick={() => navigate("/terms")}
            style={{ cursor: "pointer" }}
          >
            Política de Privacidad
          </strong>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/people/Pulidonow-Store/100063472932738/">
            <div className="icon">
              <i className="bx bxl-facebook"></i>
            </div>
          </a>
          <a
            href="https://www.instagram.com/pulidonow/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon">
              <i className="bx bxl-instagram"></i>
            </div>
          </a>
          <a
            href="https://open.spotify.com/playlist/1HedclSfxoINP9aqulujZ3?si=5Nr0gPIgT1mFByq0I9hZ6A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon">
              <i className="bx bxl-spotify"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
