import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../../../redux/actions/ProductsActions";
import axios from "axios";
import "./ProductDetail.css";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  // console.log("product:", product);
  // const { image, title, price, category, description } = product;
  const location = useLocation();
  const dispatch = useDispatch();

  const productId = queryString.parse(location.search)?.id;
  //   console.log("pid", productId);

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div className="loading-pos">
          <figure>
    <div className="dot white"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
</figure>
        </div>
      ) : (
        <div className="">
          <div className="">
            <div className="">
              <div className="">
                <img className="for-image" src={product.image} />
              </div>
              <div>
                <p>{product.title}</p>
                {/* or of we define  const { image, title, price, category, description } = product; then
                only {title} {price} can be done*/}
                <p>
                  <a>${product.price}</a>
                </p>
                <p>{product.category}</p>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
