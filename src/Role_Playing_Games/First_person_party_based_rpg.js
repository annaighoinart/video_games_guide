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
                        <a className="a_fppb_rpg" href="http://www.devilwhiskey.com/" target="_blank">Devil Whiskey</a>,
                        <a className="a_fppb_rpg" href="https://store.steampowered.com/app/2100/Dark_Messiah_of_Might__Magic" target="_blank"> Dark Messiah of Might & Magic</a>,
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_fppb_rpg" href="https://www.arkane-studios.com/en" target="_blank">Arkane Studios</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}