import React from 'react';
import logo from './logo.svg';
import './App.css';

import './Action_Games/Fighting'
import Fighting from './Action_Games/Fighting';
import './Action_Games/Shooter'
import Shooter from './Action_Games/Shooter';

const colStyle = {
  paddingLeft: "0px",
  paddingRight: "0px"
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
            <button type="button" className="btn btn-primary">
              <span className="fab fa-linkedin-in" />
            </button>
          </a>
          <a href="https://github.com/annaighoinart" target="_blank" className="git_button">
            <button type="button" className="btn btn-dark git_button">
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

      <br />
      
      <div className="row">
        <div className="col" style={colStyle}>
          <Fighting />
        </div>
        <div className="col" style={colStyle}>
          <Shooter />
        </div>
      </div>

    </div>
  );
}

export default App;
