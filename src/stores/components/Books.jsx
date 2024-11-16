import React from 'react'
import {booksData} from '../data/books'
import { Link } from 'react-router-dom';

const Books = () => {
   const firstFiveImages = booksData.slice(0, 5);
  return (
    <>
      <div className="proTitle">
        <h2>Books</h2>
      </div>
      <div className="proSection">
        {firstFiveImages.map((product) => {
          return (
            <>
              <div className="product-list">
                <div key={product.id} className="product-card">
                  <Link to={`/books/${product.id}`}>
                    <img src={product.image} alt={product.title} />
                  </Link>
                  <h2>
                    {product.title} {product.model}
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

export default Books