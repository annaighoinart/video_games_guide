import React from 'react';
import './Action_Games.css'

export default function Platformer() {
    return(
        <div className="platformer_div">
            <h2 className="platformer_red_text">Platformer</h2>
            <br />
            <p>Platformer games get their name from the fact that the game’s
                character interacts with platforms (usually running, jumping, 
                or falling) throughout the gameplay. There are many types of platform games; 
                Super Mario Bros. is probably the best known, and Donkey Kong was one of the earliest.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_platformer" href="https://mario.nintendo.com/" target="_blank">Super Mario Bros</a>,
                        <a className="a_platformer" href="https://playdead.com/games/limbo/" target="_blank"> Limbo</a>,
                        <a className="a_platformer" href="http://supermeatboy.com/" target="_blank"> Super Meat Boy</a>,
                        <a className="a_platformer" href="https://hollowknight.com/" target="_blank"> Hollow Knight</a>,
                        <a className="a_platformer" href="http://www.cupheadgame.com/" target="_blank"> Cuphead</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_platformer" href="https://www.nintendo.com/" target="_blank">Nintendo</a>,
                        <a className="a_platformer" href="https://playdead.com/" target="_blank"> PlayDead</a>,
                        <a className="a_platformer" href="https://www.devolverdigital.com/" target="_blank"> Devolver Digital</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}