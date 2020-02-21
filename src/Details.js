import React from 'react';
import './App.css';

function Details() {
  return (
    <main role="main" class="container">
        <title>Photo Details</title>
        <div class="starter-template">
            <h1>Photo Details</h1>
            <p class="lead">This page shows the details of the photo that you just clicked on.</p>
        </div>

        <div class="container">

            <div class="row">
                <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                        <img class="card-img-top" src="fatCat.jpg" alt="Card image cap"></img>
                        <div class="card-body">
                            <p class="card-text">These are where details about this photo would be if I had any kind of info about it.</p>
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

export default Details;