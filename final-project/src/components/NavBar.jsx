import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faGift, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const NavBar = () => {
  const navBarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: 'white',
    borderBottom: '1px solid #e5e5e5'
  };

  const navSectionStyle = {
    display: 'flex',
    alignItems: 'center'
  };

  const navBrand = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center'
  };

  const navItem = {
    margin: '0 10px',
    textDecoration: 'none',
    color: 'black'
  };

  const logo = {
    fontSize: '30px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'black',
    padding: '0 20px',
    border: '1px solid black'
  };

  const searchInput = {
    border: 'none',
    padding: '10px'
  };

  const searchButton = {
    background: 'none',
    border: 'none',
    padding: '5px',
    cursor: 'pointer'
  };
  const trending = [
    { label: 'Honey Soap'},
    { label: 'Hair Oil'},
    { label: 'Candles'}
]

  return (
    <nav style={navBarStyle}>
      <div style={navSectionStyle}>
        <a href="#" style={navItem}>PRODUCTS</a>
        <a href="#" style={navItem}>OUR STORY</a>
        <a href="#" style={navItem}>BLOG</a>
        <a href="#" style={navItem}>SALE</a>
        <a href="#" style={navItem}>CONTACT</a>
      </div>
      <div style={navBrand}>
        <a href="#" style={logo}>AyurCraft</a>
      </div>
      <div style={navSectionStyle}>
        <div>
            <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={trending}
        sx={{ width: 250 }}
        renderInput={(params) => <TextField {...params} label="Search..." />}
        />
        </div>
        <a href="#" style={navItem}><FontAwesomeIcon icon={faUser} /> Log In</a>
        <a href="#" style={navItem}><FontAwesomeIcon icon={faGift} /></a>
        <a href="#" style={navItem}><FontAwesomeIcon icon={faShoppingBag} /></a>
      </div>
    </nav>
  );
};

export default NavBar;