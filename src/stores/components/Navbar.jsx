import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

const Navbar = () => {

  const {cartItems }= useCart()

  return (
    <>
      <div className="navSection">
        <div className="title">
          <Link to="/">
            <h2>RoyalE-Mart</h2>
          </Link>
        </div>
        <div className="search">
          <input type="text" placeholder="search..." />
        </div>
        <div className="user">
          <div className="user-detail">signup/signin</div>
          <Link to="/cart">
            <div className="cart">
              cart
              <span>{cartItems.length}</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="subMenu">
        <ul>
          <Link to="/mobiles">
            <li>Mobiles</li>
          </Link>
          <Link to="/computers">
            <li>computers</li>
          </Link>
          <Link to="/watches">
            <li>watches</li>
          </Link>
          <Link to="/mens">
            <li>Men</li>
          </Link>
          <Link to="/woman">
            <li>Woman</li>
          </Link>
          <Link to="/furniture">
            <li>Furniture</li>
          </Link>
          <Link to="/kitchen">
            <li>Kitchen</li>
          </Link>
          <Link to="/fridge">
            <li>Fridge</li>
          </Link>
          <Link to="/books">
            <li>Books</li>
          </Link>
          <Link to="/speakers">
            <li>speakers</li>
          </Link>
          <Link to="/tv">
            <li>TV</li>
          </Link>
          <Link to="/ac">
            <li>AC</li>
          </Link>
          <Link to="/pros">
            <li>GameingMobile</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
