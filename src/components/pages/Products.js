import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import ProductComponent from "./product/ProductComponent";
import { fetchProducts } from "../../redux/actions/ProductsActions";

const Products = () => {
  // const products = useSelector((state) => state);
  // console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <div>
        <h1 className="products">PRODUCTS</h1>
      </div>
      <div className="container">
        <div className="grid-items">
          <ProductComponent />
        </div>
      </div>
    </div>
  );
};

export default Products;
