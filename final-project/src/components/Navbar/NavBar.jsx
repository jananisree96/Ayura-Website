import React, { useState } from 'react';
import { UserOutlined, GiftOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Modal, Input, Button, message } from 'antd';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './NavBar.css'; 

const NavBar = ({ toggleCart }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLoginSuccess = () => {
    // Show a success toast
    message.success('Login Successful!');

    // Close the modal
    setIsLoginModalOpen(false);

    // Clear the form data
    setEmail('');
    setPassword('');
  };

  const handleLogin = () => {
    // Here you can add your login logic (e.g., API call)

    // Simulating a successful login
    handleLoginSuccess();
  };

  const trending = [
    { label: "Honey Soap" },
    { label: "Hair Oil" },
    { label: "Candles" },
  ];

  return (
    <>
      <div className="shipping">
        <img src="./aro.png" alt="..." />
        <p>FREE SHIPPING ON ORDERS OVER $50</p>
      </div>
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
            AYURA
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
          <a href="#" className="nav-item" id="icon-large" onClick={handleLoginClick}>
            <UserOutlined style={{ fontSize: "24px" }} /> Log In
          </a>
          <a href="#" className="nav-item">
            <GiftOutlined style={{ fontSize: "24px" }} />
          </a>
          <a href="#" className="nav-item" onClick={toggleCart}>
            <ShoppingCartOutlined style={{ fontSize: "24px" }} />
          </a>
        </div>
      </nav>
      
      <Modal 
        title="Log In"
        visible={isLoginModalOpen}
        onCancel={closeLoginModal}
        footer={null}
        centered
      >
        <div className="login-form">
          <Input 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: '10px' }} 
          />
          <Input.Password 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: '20px' }} 
          />
          <Button type="primary" block onClick={handleLogin}>
            Login
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default NavBar;
