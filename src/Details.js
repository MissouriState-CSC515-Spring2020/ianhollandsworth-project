import React from 'react';
import './App.css';

function Details() {
  return (
    <main role="main" className="container">
        <title>Photo Details</title>
        <div className="starter-template">
            <h1>Photo Details</h1>
            <p className="lead">This page shows the details of the photo that you just clicked on.</p>
        </div>

        <div className="container">

            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" src="fatCat.jpg" alt="Card image cap"></img>
                        <div className="card-body">
                            <p className="card-text">These are where details about this photo would be if I had any kind of info about it.</p>
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

export default Details;