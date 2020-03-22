import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Categories() {
  return (
    <main role="main" class="container">
        <title>Categories</title>
        <div class="starter-template">
            <h1>Pizza Slices</h1>
            <p class="lead">These are photos of three different pizza slices.</p>
        </div>
        <div class="container">

            <div class="row">
                <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                        <Link to="/details"><img class="card-img-top" src="cheese.jpg" alt="Card image cap"></img></Link>
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                        <Link to="/details"><img class="card-img-top" src="pep.jpg" alt="Card image cap"></img></Link>
                        <div class="card-body">
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                        <Link to="/details"><img class="card-img-top" src="sausage.jpg" alt="Card image cap"></img></Link>
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
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