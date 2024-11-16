import React from 'react'
import {proData} from '../data/proData'
import { Link } from 'react-router-dom';

const Pro = () => {
   const firstFiveImages = proData.slice(0, 5);
   return (
     <>
       <div className="proTitle">
         <h2>Gameing mobiles</h2>
       </div>
       <div className="proSection">
         {firstFiveImages.map((product) => {
           return (
             <>
               <div className="product-list">
                 <div key={product.id} className="product-card">
                   <Link to={`/pros/${product.id}`}>
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

export default Pro