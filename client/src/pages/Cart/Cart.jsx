import { useContext } from "react";
import "./Cart.css";
import { Cartitem } from "./CartItem/Cartitem";
import { Context } from "../../utils/context";

export const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubTotal, cartCount } = useContext(Context);

  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Carrito de Compra</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <i className="bx bx-x"></i>
            <span className="text">Close</span>
          </span>
        </div>

        {!cartItems?.length && (
          <div className="empty-cart">
            <i className="bx bx-cart"></i>
            <span>No hay productos en el Carrito</span>
            <button className="return-cta">Ir a Comprar</button>
          </div>
        )}

        {!!cartItems?.length && (
          <>
            <Cartitem />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">$ {cartSubTotal}</span>
              </div>

              <div className="button">
                <a
                  className="checkout-cta"
                  target="_blank"
                  rel="noreferrer"
                  href={
                    `https:api.whatsapp.com/send?phone=+584129862168&text=%C2%A1Hola!%20Me%20interesa%20este%20producto:%20` +
                    cartCount +
                    cartItems?.title
                  }
                >
                  Checkout
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
