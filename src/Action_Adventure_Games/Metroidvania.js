import React from 'react';
import './Action_adventure_games.css'

export default function Metroidvania() {
    return(
        <div className="metroidvania_div">
            <h2 className="metroidvania_red_text">Metroidvania</h2>
            <br />
            <p>The game genre whose name is based on the games that inspired
                it, Metroid and Castlevania. Metroidvania-type games are like basic
                action-adventure games, but aren't linear, and often require that the
                player backtrack, or is kept from progressing, until they find a specific
                item or special tool. “Upgrading” your character with new weapons, abilities,
                and other power-ups allows them to access “special”  areas of the game—but not
                before a bossfight, which is also a major characteristic of Metroidvania-type games.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_metroidvania" href="https://www.orithegame.com/" target="_blank">Ori and the Blind Forest</a>,
                        <a className="a_metroidvania" href="https://dead-cells.com/" target="_blank"> Dead Cells</a>,
                        <a className="a_metroidvania" href="http://www.cellardoorgames.com/roguelegacy/" target="_blank"> Rogue Legacy</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_metroidvania" href="https://motion-twin.com/en/" target="_blank">Motion Twin</a>,
                        <a className="a_metroidvania" href="https://www.orithegame.com/moon-studios/" target="_blank"> Moon Studios</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}