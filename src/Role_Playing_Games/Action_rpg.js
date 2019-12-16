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
                        <a className="a_action_rpg" href="https://elderscrolls.bethesda.net/en/skyrim" target="_blank">The Elder Scrolls V: Skyrim</a>,
                        <a className="a_action_rpg" href="https://thewitcher.com/en/" target="_blank"> The Witcher 3: Wild Hunt</a>,
                        <a className="a_action_rpg" href="https://www.ea.com/games/dragon-age/dragon-age-origins" target="_blank"> Dragon Age: Origins</a>,
                        <a className="a_action_rpg" href="https://fallout.bethesda.net/en/games/fallout-new-vegas" target="_blank"> Fallout: New Vegas</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_action_rpg" href="https://bethesda.net/en/dashboard" target="_blank">Bethesda</a>,
                        <a className="a_action_rpg" href="https://www.bioware.com/" target="_blank"> BioWare</a>,
                        <a className="a_action_rpg" href="https://en.cdprojektred.com/" target="_blank"> CD Project Red</a>,
                        <a className="a_action_rpg" href="https://www.fromsoftware.jp/ww/" target="_blank"> From Software</a>,
                        <a className="a_action_rpg" href="https://www.rockstargames.com/" target="_blank"> Rockstar</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}