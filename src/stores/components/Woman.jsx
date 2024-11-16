import React from 'react'
import {womanData} from '../data/woman'
import { Link } from 'react-router-dom';

const Woman = () => {
   const firstFiveImages = womanData.slice(0, 5);
   return (
     <>
       <div className="proTitle">
         <h2>woman</h2>
       </div>
       <div className="proSection">
         {firstFiveImages.map((product) => {
           return (
             <>
               <div className="product-list">
                 <div key={product.id} className="product-card">
                   <Link to={`/womans/${product.id}`}>
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

export default Woman