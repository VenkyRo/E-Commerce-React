import React from 'react'

import {watchData} from '../data/watch'
import { Link } from 'react-router-dom';

const Watches = () => {
    const firstFiveImages = watchData.slice(0, 5);
  return (
    <>
      <div className="proTitle">
        <h2>Watches</h2>
      </div>
      <div className="proSection">
        {firstFiveImages.map((product) => {
          return (
            <>
              <div className="product-list">
                <div key={product.id} className="product-card">
                  <Link to={`/watches/${product.id}`}>
                    <img src={product.image} alt={product.brand} />
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

export default Watches