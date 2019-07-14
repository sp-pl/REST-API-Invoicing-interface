import React from 'react';
import jQuery from 'jquery';
import Popper from 'popper.js';
import Bootstrap from 'bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Nav from './components/nav/nav.jsx';
import NewInvoiceTemplate from './components/main/new_invoice/new_invoice_template.jsx';

fetch("https://jolapatola5.fakturownia.pl/invoices.json?period=this_month&api_token=B5Lg3uPBCMcDNX5lsQOM/jolapatola5")
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(JSON.stringify(myJson));
  })


function App() {
  return (
    <div className="App">
      <Nav />
      <NewInvoiceTemplate />
    </div>
  );
}

export default App;
