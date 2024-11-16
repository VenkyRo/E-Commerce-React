import React from 'react'
import {mobileData} from '../stores/data/mobiles'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Navbar from '../stores/components/Navbar'
import { useCart } from '../stores/context/CartContext'

const MobileProduct = () => {
    const {id} = useParams();

    const {addToCart, cartItems} = useCart()

    const firstFiveImages = mobileData.slice(0, 5);

    const product = mobileData.find((item)=> item.id === id)

    console.log(id);
    
  return (
    <>
    <Navbar></Navbar>
      <div class="single-product-page">
        <div class="product-info">
          <h1 class="product-title">
            {product.company}
            {product.model}
          </h1>
          <p class="product-description">{product.description}</p>
          <p class="product-price">Price: ${product.price}</p>
          <div class="button-group">
            <button class="add-to-cart-btn" onClick={()=> addToCart(product)}>Add to Cart</button>
            <button class="buy-now-btn">Buy Now</button>
          </div>
        </div>
        <div class="product-image-container">
          <img
            src={product.image}
            alt="Samsung Galaxy S23"
            class="product-image"
          />
        </div>
      </div>

      <div className="proTitle">
        <h2>More Products</h2>
      </div>
      <div className="proSection">
        {firstFiveImages.map((product) => {
          return (
            <>
              <div className="product-list">
                <div key={product.id} className="product-card">
                  <Link to={`/mobiles/${product.id}`}>
                    <img src={product.image} alt={product.model} />
                  </Link>
                  <h2>
                    {product.company} {product.model}
                  </h2>

                  <p>Price: ${product.price}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default MobileProduct