import React from 'react';
import './Role_Playing_Games.css'

export default function Sandbox_rpg() {
    return(
        <div className="sandbox_rpg_div">
            <h2 className="sandbox_rpg_red_text">Sandbox RPG</h2>
            <br />
            <p>Sandbox, or open-world, role-playing games allow players to freely roam their
                game environments in search of adventure. These are some of the most immersive
                and engaging video game experiences available, because the massive amount of game
                characters and situations required to populate side quests and supporting storylines
                enable game developers to create almost lifelike virtual worlds.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_sandbox_rpg" href="https://freebirdgames.com/to_the_moon/" target="_blank">To The Moon</a>,
                        <a className="a_sandbox_rpg" href="http://www.grimremastered.com/" target="_blank"> Grim Fandango</a>,
                        <a className="a_sandbox_rpg" href="http://www.nightinthewoods.com/" target="_blank"> Night in the Woods</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_sandbox_rpg" href="https://fullbrig.ht/" target="_blank">FullBright</a>,
                        <a className="a_sandbox_rpg" href="https://www.camposanto.com/" target="_blank"> Campo Santo</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}