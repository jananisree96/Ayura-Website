import React from 'react';

const Login = ({ closeLoginModal }) => {
  return (
    <div className="login-modal">
      <div className="login-modal-content">
        <span className="close-btn" onClick={closeLoginModal}>&times;</span>
        <h2>Log In</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
