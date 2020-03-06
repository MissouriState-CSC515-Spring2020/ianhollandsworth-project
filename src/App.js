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
     <div classNameName="App">
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

  <main role="main" className="container">
    <title>User's Recent Photos</title>

    <div className="starter-template">
          <h1>User's Recent Photos</h1>
          <p className="lead">These are the most entertaining programming memes I could find.</p>
          <p className= "lead">At the top of this page there is a list of other categories of photos that can be easily navigated through by clicking each category.</p>
    </div>

    <div className="container">

          <div className="row">
              <div className="col-md-4">
                  <div className="card mb-4 box-shadow">
                  <Link to="/details"> <img className="card-img-top" src="spongeMeme.jpg" alt="Card image cap"></img></Link>
                      <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center">
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card mb-4 box-shadow">
                  <Link to="/details"><img className="card-img-top" src="frodoMeme.jpg" alt="Card image cap"></img></Link>
                      <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center">
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card mb-4 box-shadow">
                  <Link to="/details"><img className="card-img-top" src="thinkMeme.jpg" alt="Card image cap"></img></Link>
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

export default App;
