import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div className="login-page">
        <div className="login-top-background" />
        <div className="login-box-container">
          <img src="Images/logo.png" className="login-box-logo" />
          <div className="login-box">
            <p className="login-box-title" >Welcome to Berwick cards</p>
            <a href="auth/google">
              <button className="login-button">
                <img src="Images/google_logo.jpg" /> Login with google{' '}
              </button>
            </a>
            <p className="login-box-detail" >login with google to start using our app</p>
          </div>
        </div>
      </div>
    );
}

export default Login;
