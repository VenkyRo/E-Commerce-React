import React from 'react'
import {acData} from '../data/ac'
import { Link } from 'react-router-dom';

const AC = () => {
    const firstFiveImages = acData.slice(0, 5);
  return (
    <>
      <div className="proTitle">
        <h2>AC</h2>
      </div>
      <div className="proSection">
        {firstFiveImages.map((product) => {
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
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default AC