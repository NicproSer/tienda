import "./Home.css";
import { Slider } from "./Banner/Banner";
import { Category } from "./Category/Category";
import { Products } from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { useEffect, useContext } from "react";
import { Context } from "../../utils/context";

export const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);
  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getProducts = () => {
    fetchDataFromApi(
      "/api/products?populate=*&pagination[start]=0&pagination[limit]=8"
    ).then((res) => {
      setProducts(res);
    });
  };

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };

  return (
    <div>
      <Slider />
      <div className="main-content">
        <div className="layaout">
          <Category categories={categories} />
          <Products products={products} headingText="Productos Destacados" />
        </div>
      </div>
    </div>
  );
};
