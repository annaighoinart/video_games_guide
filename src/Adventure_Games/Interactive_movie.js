import React from 'react';
import './Adventure_Games.css'

export default function Interactive_movies() {
    return(
        <div className="interactive_movies_div">
            <h2 className="interactive_movies_red_text">Interactive movies</h2>
            <br />
            <p>Laserdisc and CD-ROM technology allowed for the introduction of the interactive movie.
                Interactive movies contain pre-filmed live-action or animation sequences. The adventure
                is played out typically from a third-person perspective and the player controls the action
                during pivotal points in the story, like pushing a joystick right or pressing a button to
                “jump” out of the way as a boulder rushes toward them.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_interactive_movies" href="https://www.quanticdream.com/en/heavy-rain" target="_blank">Heavy Rain</a>,
                        <a className="a_interactive_movies" href="https://www.supermassivegames.com/games/until-dawn" target="_blank"> Until Dawn</a>,
                        <a className="a_interactive_movies" href="https://www.quanticdream.com/en/detroit-become-human" target="_blank"> Detroit: Become Human</a>,
                        <a className="a_interactive_movies" href="https://lifeisstrange.square-enix-games.com/en-us/games/life-is-strange" target="_blank"> Life is Strange</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_interactive_movies" href="https://www.quanticdream.com/en" target="_blank">Quantic Dream</a>,
                        <a className="a_interactive_movies" href="https://square-enix-games.com/en_EU" target="_blank"> Square Enix</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}