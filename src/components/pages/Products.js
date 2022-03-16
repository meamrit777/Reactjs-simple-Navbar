import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import ProductComponent from "./product/ProductComponent";
import { fetchProducts } from "../../redux/actions/ProductsActions";

const Products = () => {
  const products = useSelector((state) => state);
  console.log(products);
  const dispatch = useDispatch();

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log("err:", err);
  //     });
  //   dispatch(setProducts(response.data));
  // };
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // console.log("Products :", products);
  return (
    <div className="container">
      <h1 className="products">PRODUCTS</h1>
      <div className="grid-items">
        <ProductComponent />
      </div>
    </div>
  );
};

export default Products;
