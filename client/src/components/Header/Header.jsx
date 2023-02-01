import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/context";
import "./Header.css";
import { Cart } from "../../pages/Cart/Cart";
import { Search } from "./Search/Search";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount } = useContext(Context);
  const navigate = useNavigate();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Inicio</li>
            <li onClick={() => navigate("/about")}>Nosotros</li>
            <li>Categorias</li>
            <li>Contacto</li>
          </ul>
          <div className="center">Tienda</div>
          <div className="right">
            <i
              className="bx bx-search-alt-2"
              onClick={() => setShowSearch(true)}
            ></i>
            <i className="bx bx-heart"></i>
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <i className="bx bx-cart-alt"></i>
              {!!cartCount && (
                <span className="cart-icon-text">{cartCount}</span>
              )}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};
