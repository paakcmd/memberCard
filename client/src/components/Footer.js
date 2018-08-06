import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer">
    <Link to={'/myqrcode'}><img alt="qrcode" src="Images/my_qrcode.png"/><span>MyQrcode</span></Link>
    <Link to={'/mycards'}><img alt="stamps" src= "Images/stamps.png"/><span>Mycards</span></Link>
    <Link to={'/history'}><img alt="history" src= "Images/history.png"/><span>History</span></Link>
    <Link to={'/account'}><img alt="account" src= "Images/account.png"/><span>Account</span></Link>
    </div>


  )
}

export default Footer
