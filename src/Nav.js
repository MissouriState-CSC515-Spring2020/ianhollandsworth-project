import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <Link to="/" style={navStyle}>   
    <a className="navbar-brand">Home</a>
    </Link> 
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link to="/categories" style={navStyle}><a className="nav-link">Pizza</a></Link>
        </li>
        <li className="nav-item">
            <Link to="/categories" style={navStyle}><a className="nav-link">Cats</a></Link>
        </li>
        <li className="nav-item">
            <Link to="/categories" style={navStyle}><a className="nav-link">Video Games</a></Link>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  
  );
}

export default Nav;