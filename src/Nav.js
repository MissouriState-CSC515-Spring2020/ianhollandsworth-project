import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    };

  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <Link to="/" style={navStyle}>   
    <a class="navbar-brand">Home</a>
    </Link> 
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <Link to="/categories" style={navStyle}><a class="nav-link">Pizza</a></Link>
        </li>
        <li class="nav-item">
            <Link to="/categories" style={navStyle}><a class="nav-link">Cats</a></Link>
        </li>
        <li class="nav-item">
            <Link to="/categories" style={navStyle}><a class="nav-link">Video Games</a></Link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  
  );
}

export default Nav;