// Header.js

import React from 'react';
import './header.css'
function Header() {
  return (
    <section className="header">
      <div className="text1">
        <h1>Find Your Dream House</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra posuere sem purus enim eleifend habitant arcu, sed.</p>
      </div>
      <div className="location center">
        <div className="card1">
          <span>Location</span>
          <img src="./pic/down.svg" alt="Location" />
          <h3>California</h3>
        </div>
        <div className="card1">
          <span>Properties</span>
          <img src="./pic/down.svg" alt="Properties" />
          <h3>Deluxe</h3>
        </div>
        <div className="card1">
          <span>Price</span>
          <img src="./pic/down.svg" alt="Price" />
          <h3>$10,000-$12,0000</h3>
        </div>
        <div className="search-btn">
          Search
        </div>
      </div>
    </section>
  );
}

export default Header;
