
import React from 'react'


import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'


const Mobiles = () => {

    const firstFiveImages = mobileData.slice(0,5)

  return (
    <>
      <div className="proTitle">
        <h2>Mobiles</h2>
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

export default Mobiles