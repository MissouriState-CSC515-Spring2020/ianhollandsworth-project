import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Categories() {
  return (
    <main role="main" className="container">
        <title>Categories</title>
        <div className="starter-template">
            <h1>Pizza Slices</h1>
            <p className="lead">These are photos of three different pizza slices.</p>
        </div>
        <div className="container">

            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <Link to="/details"><img className="card-img-top" src="cheese.jpg" alt="Card image cap"></img></Link>
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <Link to="/details"><img className="card-img-top" src="pep.jpg" alt="Card image cap"></img></Link>
                        <div className="card-body">
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <Link to="/details"><img className="card-img-top" src="sausage.jpg" alt="Card image cap"></img></Link>
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}

export default Categories;