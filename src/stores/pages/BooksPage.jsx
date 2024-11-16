import React, { useState } from "react";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { booksData } from "../data/books";

const BooksPage = () => {
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
      ? booksData
      : booksData.filter((item) => selectedProduct.includes(item.author));

  return (
    <>
      <Navbar></Navbar>
      <div className="full-page">
        <div className="pro-selectde">
          {booksData.map((phone) => {
            return (
              <div className="pro-input">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(phone.author)}
                    onChange={() => companyHandler(phone.author)}
                  />
                  {phone.author}
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
                    <Link to={`/books/${product.id}`}>
                      <img src={product.image} alt={product.title} />
                    </Link>
                    <h2>
                      {product.title} {product.author}
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

export default BooksPage;
