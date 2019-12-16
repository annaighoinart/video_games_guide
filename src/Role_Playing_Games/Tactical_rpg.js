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
                        <a className="a_tactical_rpg" href="https://divinity.game/" target="_blank">Divinity: Original Sin</a>,
                        <a className="a_tactical_rpg" href="https://eternity.obsidian.net/" target="_blank"> Pillars of Eternity</a>,
                        <a className="a_tactical_rpg" href="https://bannersaga.com/" target="_blank"> Banner Saga</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_tactical_rpg" href="https://www.larian.com/" target="_blank">Larian</a>,
                        <a className="a_tactical_rpg" href="https://www.obsidian.net/" target="_blank"> Obsidian</a>,
                        <a className="a_tactical_rpg" href="https://stoicstudio.com/" target="_blank"> Stoik</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}