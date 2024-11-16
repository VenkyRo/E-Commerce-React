import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../stores/components/Navbar";
import { useCart } from "../stores/context/CartContext";

import { booksData } from "../stores/data/books";

const BooksProduct = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Find product by ID
  const product = booksData.find((item) => item.id === id);

  // Handle missing product
  if (!product) {
    return <p>Product not found.</p>;
  }

  // Display first five products for recommendations
  const firstFiveImages = booksData.slice(0, 5);

  {
    console.log("Image URL:", product.image);
  }

  return (
    <>
      <Navbar />
      <div className="single-product-page">
        <div className="product-info">
          <h1 className="product-title">
            {product.author} - {product.category}
          </h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: ${product.price}</p>
          <div className="button-group">
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <button className="buy-now-btn">Buy Now</button>
          </div>
        </div>
        <div className="product-image-container">
          <img src={product.image} alt={product.title} class="product-image" />
        </div>
      </div>

      <div className="proTitle">
        <h2>More Products</h2>
      </div>
      <div className="proSection">
        {firstFiveImages.map((product) => (
          <div key={product.id} className="product-list">
            <div className="product-card">
              <Link to={`/books/${product.id}`}>
                <img src={product.image} alt={product.title} />
              </Link>
              <h2>
                {product.title} - {product.author}
              </h2>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BooksProduct;
