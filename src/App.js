import React from 'react';
import './App.css';
import Nav from './Nav';
import Categories from './Categories';
import Details from './Details';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './starter-template.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <Router>
     <div className="App">
         <Nav />
         <Switch>
           <Route path="/" exact component={Home}/>
           <Route path="/details" component={Details}/>
           <Route path="/categories" component={Categories}/>
         </Switch>
      </div>
    </Router>
  );
}



const Home = () => (

  <main role="main" class="container">
    <title>User's Recent Photos</title>

    <div class="starter-template">
          <h1>User's Recent Photos</h1>
          <p class="lead">These are the most entertaining programming memes I could find.</p>
          <p class= "lead">At the top of this page there is a list of other categories of photos that can be easily navigated through by clicking each category.</p>
    </div>

    <div class="container">

          <div class="row">
              <div class="col-md-4">
                  <div class="card mb-4 box-shadow">
                  <Link to="/details"> <img class="card-img-top" src="spongeMeme.jpg" alt="Card image cap"></img></Link>
                      <div class="card-body">
                          <div class="d-flex justify-content-between align-items-center">
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card mb-4 box-shadow">
                  <Link to="/details"><img class="card-img-top" src="frodoMeme.jpg" alt="Card image cap"></img></Link>
                      <div class="card-body">
                          <div class="d-flex justify-content-between align-items-center">
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card mb-4 box-shadow">
                  <Link to="/details"><img class="card-img-top" src="thinkMeme.jpg" alt="Card image cap"></img></Link>
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

export default App;
