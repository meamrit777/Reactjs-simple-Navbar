import React from "react";
import { useSelector } from "react-redux";
import "../../../App.css";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log("####", products);

  const renderList = products.map((products) => {
    return (
      <div className="product-flex">
        {/* <Link to={`/productDetails?id=${products.id}`}>
          <div>
            <img className="for-image" src={products.image} />
          </div>
          <div>
            <div> title :{products.title}</div>
            <div>price : ${products.price}</div>
            <div>category: {products.category}</div>
          </div>
        </Link> */}
        ${products.price}
      </div>
    );
  });

  return <>{renderList}</>;
};
export default ProductComponent;
