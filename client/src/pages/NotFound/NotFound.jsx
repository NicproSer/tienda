import React from "react";
import "./NotFound.css";
import Img from "../../assets/undraw_not_found_re_bh2e.svg";

export const NotFound = () => {
  return (
    <>
      <div className="notfound">
        <img src={Img} alt="Error Imagen" />
      </div>
      <div className="notfound">
        <h2>
          Lo sentimos no pudimos encontrar este contenido{" "}
          <a href="/">Regresar</a>
        </h2>
      </div>
    </>
  );
};
