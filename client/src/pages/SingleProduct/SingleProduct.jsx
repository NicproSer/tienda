import { useContext, useState } from "react";
import { Context } from "../../utils/context";
import "./singleProduct.css";
import { RelatedProducts } from "../../components/RelatedProducts/RelatedProducts";
import useFetch from "./../../hooks/useFetch";
import { useParams } from "react-router-dom";

export const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const { handleAddToCart } = useContext(Context);

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  if (!data) return;
  const product = data?.data?.[0]?.attributes;

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_DEV_URL + product.img.data.attributes.url
              }
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">$ {product.price}</span>
            <span className="desc">{product.desc}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-cart"
                onClick={() => {
                  handleAddToCart(data?.data?.[0], quantity);
                  setQuantity(1);
                }}
                // href={
                //   `https://api.whatsapp.com/send?phone=+584129862168&text=%C2%A1Hola!%20Me%20interesa%20este%20producto:%20` +
                //   product.title
                // }
                // style={{ textDecoration: "none" }}
              >
                <i className="bx bx-cart-add"></i> Comprar
              </button>
            </div>

            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Categoría: {""}
                <span>{product.categories.data[0].attributes.title}</span>
              </span>
              <span className="text-bold">
                Compartir:
                <span className="social-icons">
                  <i className="bx bxl-facebook"></i>
                  <i className="bx bxl-instagram"></i>
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        />
      </div>
    </div>
  );
};
