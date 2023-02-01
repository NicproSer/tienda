import React from "react";
import "./Footer.css";
import Payment from "../../assets/payments.png";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">Nosotros</div>
          <div className="text">
            En Pulidonow nos enfocamos en atender las necesidades de los
            clientes, basandonos en las tendencias del mundo de la moda
          </div>
        </div>
        <div className="col">
          <div className="title">Contacto</div>
          <div className="c-item">
            <i className="bx bx-map"></i>
            <div className="text">
              C.C Sambil Local F-55, Maracaibo, Venezuela
            </div>
          </div>
          <div className="c-item">
            <i className="bx bx-phone"></i>
            <div className="text">
              Teléfono:{" "}
              <a
                href="https://wa.me/584124280352"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "var(--black)" }}
              >
                +58 412 4280352
              </a>
            </div>
          </div>
          <div className="c-item">
            <i className="bx bx-envelope"></i>
            <div className="text">
              Email:{" "}
              <a
                href="mailto:pulidonowstore@gmail.com"
                style={{ textDecoration: "none", color: "var(--black)" }}
              >
                pulidonowstore@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categorias</div>
          <span className="text">Tops</span>
          <span className="text">Faldas</span>
          <span className="text">Sets</span>
          <span className="text">Vestidos</span>
          <span className="text">Pantalones</span>
          <span className="text">Denim</span>
          <span className="text">Chaquetas</span>
          <span className="text">Carteras</span>
          <span className="text">Zapatos</span>
          <span className="text">Sandalias</span>
          <span className="text">Gomas</span>
          <span className="text">Ropa Interior</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text" onClick={() => navigate("/")}>
            Inicio
          </span>
          <span className="text" onClick={() => navigate("/about")}>
            Nosotros
          </span>
          <span className="text">Categorias</span>
          <span className="text">Contacto</span>
          <span className="text">Políticas de Privacidad</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            PULIDONOW STORE &copy; {new Date().getFullYear()}
            <br />
            Desarrollado por{" "}
            <a
              href="https://nicprodev.mgpanel.org"
              target="_black"
              style={{
                textDecoration: "none",
                color: "var(--black)",
                fontWeight: "600",
              }}
            >
              NICPRODEV
            </a>
          </span>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};
