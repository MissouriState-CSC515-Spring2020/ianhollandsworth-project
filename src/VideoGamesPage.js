import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import VideoGames from './VideoGames'



const VideoGamesPage = () => (

    <main role="main" className="container">
    <title>Video Games Videos</title>

    <div className="starter-template">
          <h1>Video Games Videos</h1>
          <p className="lead">This is a list of the 5 most recent video game videos uploaded to YouTube. Click the button to view these videos.</p>
    </div>

    <div className="starter-template">
          <VideoGames/>
    </div>
  </main>
  );

export default VideoGamesPage;