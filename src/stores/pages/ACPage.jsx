import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { acData } from "../data/ac";

const AcPage = () => {
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
      ? acData
      : acData.filter((item) => selectedProduct.includes(item.company));

  return (
    <>
      <Navbar></Navbar>
      <div className="full-page">
        <div className="pro-selectde">
          {acData.map((phone) => {
            return (
              <div className="pro-input">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(phone.company)}
                    onChange={() => companyHandler(phone.company)}
                  />
                  {phone.company}
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
                    <Link to={`/acs/${product.id}`}>
                      <img src={product.image} alt={product.model} />
                    </Link>
                    <h2>
                      {product.company} {product.model}
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

export default AcPage;
