import React from 'react';
import logo from './logo.svg';
import './App.css';

import './Action_Games/Fighting'
import Fighting from './Action_Games/Fighting';
import './Action_Games/Shooter'
import Shooter from './Action_Games/Shooter';

const colRight = {
  paddingLeft: "0px",
  paddingRight: "0px"
};

const colLeft = {
  paddingRight: "0px",
  paddingLeft: "0px"
};

const row = {
  width: "100%",
  margin: "0"
}

const in_btn = {
  fontSize: "100%"
};

const git_btn = {
  fontSize: "100%"
};

class HeadingText extends React.Component {
  render() {
    return (
      <div>
        <h1 className="heading_text">Video Games Genres Guide</h1>

        <p className="describe_text">Welcome to my Video Games Genres Guide.</p>
        <p className="describe_text">It's a great place to learn something new about known genres, and discover new ones.</p>
        <p className="describe_text">Have fun!</p>
      </div>
    );
  }
}

class SocialButtons extends React.Component {
  render() {
    return(
      <div>
        <div className="social_buttons">
          <a href="https://www.linkedin.com/in/atabala/" target="_blank" className="in_button">
            <button type="button" className="btn btn-primary btn-md" style={in_btn}>
              <span className="fab fa-linkedin-in" />
            </button>
          </a>
          <a href="https://github.com/annaighoinart" target="_blank" className="git_button">
            <button type="button" className="btn btn-dark git_button btn-md" style={git_btn}>
              <span className="fab fa-github" />
            </button>
          </a>
        </div>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <HeadingText />
      <SocialButtons />

      <br />
      <br />

      <h2 className="action_games_title">Action Games</h2>

      
      <div className="row" style={row}>
        <div className="col" style={colLeft}>
          <Fighting />
        </div>
        <div className="col" style={colRight}>
          <Shooter />
        </div>
      </div>

    </div>
  );
}

export default App;
