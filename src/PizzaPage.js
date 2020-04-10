import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Pizza from './Pizza'



const PizzaPage = () => (

    <main role="main" className="container">
    <title>Pizza Videos</title>

    <div className="starter-template">
          <h1>Gourmet Pizza Videos</h1>
          <p className="lead">This is a list of the 5 most recent gourmet pizza videos uploaded to YouTube. Click the button to view these videos.</p>
    </div>

    <div className="starter-template">
          <Pizza/>
    </div>
  </main>
  );

export default PizzaPage;