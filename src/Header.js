import React from 'react'
import './css/Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img 
          className="header__logo" 
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          />
      </Link>
      <div class="header__search">
        <input type="text" class="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div class="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Will</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link className="header__link" to="/checkout">
          <div class="header__optionBasket">
            <ShoppingBasketIcon className="header__shoppingBasketIcon"/>
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header;
