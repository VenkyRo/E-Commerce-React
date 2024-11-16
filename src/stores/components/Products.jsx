import React from "react";
import Mobiles from "./Mobiles";
import Computers from "./Computers";
import Watches from "./Watches";
import AC from "./AC";
import Fridge from "./Fridge";
import Books from "./Books";
import Furniture from "./Furniture";
import Kitchen from "./Kitchen";
import Men from "./Men";
import Pro from "./Pro";
import Speaker from "./Speaker";
import TV from "./TV";
import Woman from "./Woman";


const Products = () => {
  return (
    <div>
      <Mobiles />
      <Computers></Computers>
      <Men></Men>
      <Woman></Woman>
      <Watches></Watches>
      <AC></AC>
      <Fridge></Fridge>
      <Books></Books>
      <Furniture></Furniture>
      <Kitchen></Kitchen>
      <Pro></Pro>
      <Speaker></Speaker>
      <TV></TV>
      
    </div>
  );
};

export default Products;
