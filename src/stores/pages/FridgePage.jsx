import React, { useState } from "react";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { fridgeData } from "../data/fridge";

const FridgePage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (mobile) => {
    if (selectedProduct.includes(mobile)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== mobile));
    } else {
      setSelectedProduct([...selectedProduct, mobile]);
    }
  };

  const fliteredProduct =
    selectedProduct.length === 0
      ? fridgeData
      : fridgeData.filter((item) => selectedProduct.includes(item.brand));

  return (
    <>
      <Navbar></Navbar>
      <div className="full-page">
        <div className="pro-selectde">
          {fridgeData.map((phone) => {
            return (
              <div className="pro-input">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(phone.brand)}
                    onChange={() => companyHandler(phone.brand)}
                  />
                  {phone.brand}
                </label>
              </div>
            );
          })}
        </div>
        <div className="pageSection">
          {fliteredProduct.map((product) => {
            return (
              <>
                <div className="product-list">
                  <div key={product.id} className="product-card">
                    <Link to={`/fridges/${product.id}`}>
                      <img src={product.image} alt={product.brand} />
                    </Link>
                    <h2>
                      {product.company} {product.brand}
                    </h2>

                    <p>Price: ${product.price}</p>

                    <button>Cart</button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FridgePage;
