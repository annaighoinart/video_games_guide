import React from 'react';
import './Role_Playing_Games.css'

export default function Tactical_rpg() {
    return(
        <div className="tactical_rpg_div">
            <h2 className="tactical_rpg_red_text">Tactical RPG</h2>
            <br />
            <p>Considering their origins in tabletop gaming, tactical role-playing games play more
                like traditional board games, wherein the turn-based game action plays out over an
                isometric grid. Players use almost chess-like strategy and a finite numbers of resources
                (armies, weapons, etc.) to conquer battles and enemies.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_tactical_rpg" href="https://freebirdgames.com/to_the_moon/" target="_blank">To The Moon</a>,
                        <a className="a_tactical_rpg" href="http://www.grimremastered.com/" target="_blank"> Grim Fandango</a>,
                        <a className="a_tactical_rpg" href="http://www.nightinthewoods.com/" target="_blank"> Night in the Woods</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_tactical_rpg" href="https://fullbrig.ht/" target="_blank">FullBright</a>,
                        <a className="a_tactical_rpg" href="https://www.camposanto.com/" target="_blank"> Campo Santo</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}