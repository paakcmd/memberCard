import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Qrcode from './pages/Qrcode';
import Footer from './Footer';
import Account from './pages/Account';
import MyCards from './pages/MyCards';
import History from './pages/History';
const Pages = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Qrcode} />
        <Route exact path="/myqrcode" component={Qrcode} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/mycards" component={MyCards} />
        <Route exact path="/history" component={History} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Pages;
