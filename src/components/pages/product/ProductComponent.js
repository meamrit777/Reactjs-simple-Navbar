import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../App.css";
import { Link } from "react-router-dom";
import { Select } from "antd";
import axios from "axios";
import { selectedProduct } from "../../../redux/actions/ProductsActions";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  //useSelector Allows us to extract data from the Redux store state
  // console.log("####", products);
  const Option = Select;
  const dispatch = useDispatch();
  const [getProductDetail, setGetProductDetail] = useState();

  const fetchProductDetails = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err", err);
      });
    console.log("response:", response);
    if (response.status == 200) {
      setGetProductDetail(response.data);//there are {config,data{id,title etc},headers,request(status,statusText)}
      //we set data only
      // console.log("data", response.data);
      dispatch(selectedProduct(response.data));
    }
  };

  return (
    <div className="container">
      <div className="flex-product">
        <div className="left-select">
          <span>Select Product</span>
          <div>
            {
              <Select
                className="dropdown-category"
                onChange={(value) => {
                  fetchProductDetails(value);
                }}
              >
                {products?.map((data) => (
                  <Option key={data.id} value={data.id}>
                    {data.title}
                  </Option>
                ))}
              </Select>
            }
          </div>
        </div>
        <div className="right-detail">
          {/* applying condition for loading details on same page */}
          {getProductDetail ? (
            <div>
              {getProductDetail.title}
              <br />
              {getProductDetail.description}
              <br />
              <img className="for-image" src={getProductDetail.image} alt="" />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="product-flex">
        {products?.map((data) => {
          //data is just a prop(like obj) for mapping
          return (
            <div>
              <Link to={`/productDetails?id=${data.id}`}>
                <div>
                  <img className="for-image" src={data.image} />
                </div>
                <div>
                  <div> title :{data.title}</div>
                  <div>price : ${data.price}</div>
                  <div>category: {data.category}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductComponent;
