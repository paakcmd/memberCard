import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Qrcode from './Qrcode';
import Footer from './Footer';
import Account from './Account';
import MyCards from './MyCards';
import History from './History';
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
