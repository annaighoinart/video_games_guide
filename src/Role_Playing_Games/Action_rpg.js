import React from 'react';
import './Role_Playing_Games.css'

export default function Action_rpg() {
    return(
        <div className="action_rpg_div">
            <h2 className="action_rpg_red_text">Action RPG</h2>
            <br />
            <p>Action role-playing games take game elements of both action games and
                action-adventure games. A defining characteristic of action RPGs is that
                the combat takes place in real-time and depends on a player’s speed and accuracy
                to best foes, versus depending on high character attributes like charisma and dexterity.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_action_rpg" href="https://freebirdgames.com/to_the_moon/" target="_blank">To The Moon</a>,
                        <a className="a_action_rpg" href="http://www.grimremastered.com/" target="_blank"> Grim Fandango</a>,
                        <a className="a_action_rpg" href="http://www.nightinthewoods.com/" target="_blank"> Night in the Woods</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_action_rpg" href="https://fullbrig.ht/" target="_blank">FullBright</a>,
                        <a className="a_action_rpg" href="https://www.camposanto.com/" target="_blank"> Campo Santo</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}