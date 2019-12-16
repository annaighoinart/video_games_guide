import React from 'react';
import './Role_Playing_Games.css'

export default function Roguelikes() {
    return(
        <div className="roguelikes_div">
            <h2 className="roguelikes_red_text">Roguelikes</h2>
            <br />
            <p>The only other game genre based on the name of the game that inspired it, Rogue
                was a 2D computer game and dungeon crawler from 1980. The game featured a text
                interface and random level generation. Players overcame enemies and obstacles to increase their player stats.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_roguelikes" href="https://freebirdgames.com/to_the_moon/" target="_blank">To The Moon</a>,
                        <a className="a_roguelikes" href="http://www.grimremastered.com/" target="_blank"> Grim Fandango</a>,
                        <a className="a_roguelikes" href="http://www.nightinthewoods.com/" target="_blank"> Night in the Woods</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_roguelikes" href="https://fullbrig.ht/" target="_blank">FullBright</a>,
                        <a className="a_roguelikes" href="https://www.camposanto.com/" target="_blank"> Campo Santo</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}