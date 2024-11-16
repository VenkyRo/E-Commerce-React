import React from 'react'
import {menData} from '../data/men'
import { Link } from 'react-router-dom';

const Men = () => {
   const firstFiveImages = menData.slice(0, 5);
   return (
     <>
       <div className="proTitle">
         <h2>men</h2>
       </div>
       <div className="proSection">
         {firstFiveImages.map((product) => {
           return (
             <>
               <div className="product-list">
                 <div key={product.id} className="product-card">
                   <Link to={`/mens/${product.id}`}>
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

export default Men