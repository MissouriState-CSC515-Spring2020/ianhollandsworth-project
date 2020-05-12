import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Cats from './Cats'



const CatsPage = () => (

    <main role="main" className="container">
    <title>Funny Cat Videos</title>

    <div className="starter-template">
          <h1>Funny Cat Videos</h1>
          <p className="lead">This is a list of the 5 most recent funny cat videos uploaded to YouTube. Click the button to view these videos.</p>
    </div>

    <div className="starter-template">
          <Cats/>
    </div>
  </main>
  );

export default CatsPage;