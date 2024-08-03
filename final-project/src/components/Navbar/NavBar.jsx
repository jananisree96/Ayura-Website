import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGift, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './NavBar.css'; 

const NavBar = () => {
  const trending = [
    { label: 'Honey Soap' },
    { label: 'Hair Oil' },
    { label: 'Candles' }
  ];

  return (
    <>
      <div className='shipping'>FREE SHIPPING ON ORDERS OVER $50</div>
      <nav className="nav-bar">
        <div className="nav-section">
          <a href="#" className="nav-item">
            PRODUCTS
          </a>
          <a href="#" className="nav-item">
            BLOG
          </a>
          <a href="#" className="nav-item">
            SALE
          </a>
          <a href="#" className="nav-item">
            CONTACT
          </a>
        </div>
        <div className="nav-brand">
          <a href="#" className="logo">
            AyurCraft
          </a>
        </div>
        <div className="nav-section">
          <div>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={trending}
              sx={{ width: 250 }}
              renderInput={(params) => (
                <TextField {...params} label="Search..." />
              )}
            />
          </div>
          <a href="#" className="nav-item">
            <FontAwesomeIcon icon={faUser} /> Log In
          </a>
          <a href="#" className="nav-item">
            <FontAwesomeIcon icon={faGift} />
          </a>
          <a href="#" className="nav-item">
            <FontAwesomeIcon icon={faShoppingBag} />
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
