import React, {Component} from 'react';

const API = 'AIzaSyCem_BUc48RuTHrqx1KuUf5xkOElRSBYFo'
const search = 'video games ps4'
//const channelID = 'UCXgGY0wkgOzynnHvSEVmE3A'
const result = 5;

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10

//var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`
var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&q=${search}&part=snippet,id&maxResults=${result}`

class VideoGames extends Component {

  constructor(props){
    super(props);

    this.state = {
      resultyt: []
    };
    this.clicked = this.clicked.bind(this);
  }
  
clicked(){
  fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({resultyt});
      })
      .catch((error) => {
        console.error(error);
      });
}



  render(){
    // console.log(finalURL);
    console.log(this.state.resultyt);

    return(
      <div>
        <button onClick={this.clicked}>Get Video Games Videos</button>
          {
            this.state.resultyt.map((link, i) => {
              console.log(link);
              var frame = <div key={i} className="youtube"><iframe  width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
              return frame;
            })
          }
          {this.frame}


    </div>
    );
  }
}

export default VideoGames;