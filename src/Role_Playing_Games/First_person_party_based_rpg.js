import React from 'react';
import './Role_Playing_Games.css'

export default function fppb_rpg() {
    return(
        <div className="fppb_rpg_div">
            <h2 className="fppb_rpg_red_text">First-person party-based RPG</h2>
            <br />
            <p>“Blobbers” as they’re known to hardcore gamers, are dungeon role-playing games
                (dungeon RPGs) where a player leads a party of adventurers in first-person perspective.
                Games like Might and Magic and Bard’s Tale fall into this category because the player moves
                the entire party as a single unit or “blob” around the gaming area. Most “blobbers” are turn-based
                but some games can be played in real time.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_fppb_rpg" href="https://freebirdgames.com/to_the_moon/" target="_blank">To The Moon</a>,
                        <a className="a_fppb_rpg" href="http://www.grimremastered.com/" target="_blank"> Grim Fandango</a>,
                        <a className="a_fppb_rpg" href="http://www.nightinthewoods.com/" target="_blank"> Night in the Woods</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_fppb_rpg" href="https://fullbrig.ht/" target="_blank">FullBright</a>,
                        <a className="a_fppb_rpg" href="https://www.camposanto.com/" target="_blank"> Campo Santo</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}