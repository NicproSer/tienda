import React from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";

export const Product = ({ data, id }) => {
  const navigate = useNavigate();

  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        <img
          src={process.env.REACT_APP_DEV_URL + data.img.data.attributes.url}
          alt=""
        />
      </div>
      <div className="prod-details">
        <div className="name">{data.title}</div>
        <div className="price">$ {data.price}</div>
      </div>
    </div>
  );
};
