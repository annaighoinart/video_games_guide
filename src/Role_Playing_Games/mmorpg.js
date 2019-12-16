import React from 'react';
import './Role_Playing_Games.css'

export default function Mmorpg() {
    return(
        <div className="mmorpg_div">
            <h2 className="mmorpg_red_text">MMORPG</h2>
            <br />
            <p>Massive multiplayer online role-playing games (or MMORPGs) evolved as
                graphical variations of text-based multi-user dungeons (MUDs), which were developed in the late 1970s.
                MMORPGs involve hundreds of players actively interacting with each other in the same world, and
                typically, all players share the same or a similar objective.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_mmorpg" href="https://freebirdgames.com/to_the_moon/" target="_blank">To The Moon</a>,
                        <a className="a_mmorpg" href="http://www.grimremastered.com/" target="_blank"> Grim Fandango</a>,
                        <a className="a_mmorpg" href="http://www.nightinthewoods.com/" target="_blank"> Night in the Woods</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_mmorpg" href="https://fullbrig.ht/" target="_blank">FullBright</a>,
                        <a className="a_mmorpg" href="https://www.camposanto.com/" target="_blank"> Campo Santo</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}