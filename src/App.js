import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

import Fighting from './Action_Games/Fighting';
import Shooter from './Action_Games/Shooter';
import Platformer from './Action_Games/Platformer';
import Stealth from './Action_Games/Stealth';
import Survival from './Action_Games/Survival';
import Beat_em_up from './Action_Games/Beat-Em-Up';
import Survival_horror from './Action_Adventure_Games/Survival_horror';
import Metroidvania from './Action_Adventure_Games/Metroidvania';
import Text_adventures from './Adventure_Games/Text_adventures';
import Graphic_adventures from './Adventure_Games/Graphic_adventures';
import Visual_novels from './Adventure_Games/Visual_novels';
import Interactive_movies from './Adventure_Games/Interactive_movie';




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


//               //
// Top text here //
//               //

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

//                                  //
// linkedin and github buttons here //
//                                  //

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


//                                                           //
// a function to display needed tile with all the properties //
//                                                           //

class Display_Tile extends React.Component {
  render() {
    return(
        <div className="col" style={colLeft}>
          <this.props.tile />
        </div>
    );
  }
}



//                                                                                    //
// Main function below. Does many cool things like holding the whole website together //
//                                                                                    //


function App() {
  return (
    <div>
      <HeadingText />
      <SocialButtons />

      <br />
      <br />



      {/*                      */}
      {/* Action Games display */}
      {/*                      */}

      <h2 className="genre_title" id="action_games">
        <button type="button" className="arrow_btn"><span id="action_games_icon" className="fas fa-caret-up"></span></button>
        Action Games
      </h2>
      <hr className="genre_splitter" id="action_games_splitter" />
      <div id="action_games_row" className="row" style={row}>
          <Display_Tile tile={Fighting} />
          <Display_Tile tile={Shooter} />
          <div className="w-100" />
          <Display_Tile tile={Platformer} />
          <Display_Tile tile={Stealth} />
          <div className="w-100" />
          <Display_Tile tile={Survival} />
          <Display_Tile tile={Beat_em_up} />
      </div>
      


      {/*                                */}
      {/* Action-Adventure Games display */}
      {/*                                */}

      <h2 className="genre_title" id="action_adventure_games">
        <button type="button" className="arrow_btn"><span id="action_adventure_games_icon" className="fas fa-caret-up"></span></button>
        Action-Adventure Games
      </h2>
      <hr className="genre_splitter" id="action_adventure_games_splitter" />
      <div id="action_adventure_games_row" className="row" style={row}>
          <Display_Tile tile={Survival_horror} />
          <Display_Tile tile={Metroidvania} />
      </div>


      {/*                         */}
      {/* Adventure Games display */}
      {/*                         */}

      <h2 className="genre_title" id="adventure_games">
        <button type="button" className="arrow_btn"><span id="adventure_games_icon" className="fas fa-caret-up"></span></button>
        Adventure Games
      </h2>
      <hr className="genre_splitter" id="adventure_games_splitter" />
      <div id="adventure_games_row" className="row" style={row}>
          <Display_Tile tile={Text_adventures} />
          <Display_Tile tile={Interactive_movies} />
          <div className="w-100"></div>
          <Display_Tile tile={Visual_novels} />
          <Display_Tile tile={Graphic_adventures} />
      </div>

    </div>
  );
}











//                                                                                                  //
// Arrow up and down function below. Does fancy slide up and down on black arrow click using jquery //
//                                                                                                  //

  $(function(){
    $("[id$='_games_icon']").on("click", function() {
      const genre = this.id.slice(0, -5)
      console.log("#" + genre + "_splitter")
      $("#" + genre + "_row").slideToggle(800);
      if ($("#" + genre +"_icon").hasClass("fa-caret-up")) {
        $("#" + genre +"_icon").removeClass("fa-caret-up").addClass("fa-caret-down")
        $("#" + genre + "_splitter").css("display", "block")
        $("#" + genre + "_splitter").animate({
          width: "100%"
        }, 800)
      }
      else {
        $("#" + genre +"_icon").removeClass("fa-caret-down").addClass("fa-caret-up")
        $("#" + genre + "_splitter").animate({
          width: "0%"
        }, 800, function() {
          $("#" + genre + "_splitter").css("display", "none")
        });
      }
    })
  });


export default App;
