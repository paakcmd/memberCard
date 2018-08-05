import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer">
    <Link to={'/myqrcode'}><img src="Images/my_qrcode.png"/><span>MyQrcode</span></Link>
    <Link to={'/mycards'}><img src= "Images/stamps.png"/><span>Mycards</span></Link>
    <Link to={'/history'}><img src= "Images/history.png"/><span>History</span></Link>
    <Link to={'/account'}><img src= "Images/account.png"/><span>Account</span></Link>
    </div>


  )
}

export default Footer
