//import React from 'react';
import React, {Suspense, lazy} from 'react';
import './App.css';
import Nav from './Nav';
//import PizzaPage from './PizzaPage'
//import CatsPage from './CatsPage'
//import VideoGamesPage from './VideoGamesPage'
import Youtube from './Youtube';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './starter-template.css';
import {Link} from 'react-router-dom';

const API = 'AIzaSyCem_BUc48RuTHrqx1KuUf5xkOElRSBYFo'
const search = 'cats'
const result = 5;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&q=${search}&part=snippet,id&maxResults=${result}`

const PizzaPage = lazy(() => import('./PizzaPage'));
const CatsPage = lazy(() => import('./CatsPage'));
const VideoGamesPage = lazy(() => import('./VideoGamesPage'));

function App() {
  return (
    <Router>

      <Suspense fallback ={<div>Loading...</div>}>
     <div classNameName="App">
         <Nav />
         <Switch>
           <Route path="/" exact component={Home}/>
           <Route path="/pizza" component={PizzaPage}/>
           <Route path="/cats" component={CatsPage}/>
           <Route path="/videogames" component={VideoGamesPage}/>
         </Switch>
      </div>
      </Suspense>
      
    </Router>
  );
}



const Home = () => (

  <main role="main" className="container">
    <title>Home</title>

    <div className="starter-template">
          <h1>Call of Duty Warzone Videos</h1>
          <p className="lead">This is a list of the 5 most recent Call of Duty Warzone videos uploaded to YouTube. Click the button to view these videos.</p>
          <p className= "lead">At the top of this page there is a list of other categories of videos that can be easily navigated through by clicking each category.</p>
    </div>

    <div className="starter-template">
          <Youtube/>
    </div>
  </main>
);

export default App;
