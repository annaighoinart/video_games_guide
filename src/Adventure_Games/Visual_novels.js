import React from 'react';
import './Adventure_Games.css'

export default function Visual_novels() {
    return(
        <div className="visual_novels_div">
            <h2 className="visual_novels_red_text">Visual Novels</h2>
            <br />
            <p>Extremely popular in Japan, most visual novels require players to build up
                character traits or statistics to advance the gameplay. The games often have
                multiple endings which are determined by how the player responds to specific
                points in the plot. Dating and legal simulations (Ace Attorney for the Nintendo DS,
                for example) are popular themes for many visual novels.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_visual_novels" href="https://www.orithegame.com/" target="_blank">Ori and the Blind Forest</a>,
                        <a className="a_visual_novels" href="https://dead-cells.com/" target="_blank"> Dead Cells</a>,
                        <a className="a_visual_novels" href="http://www.cellardoorgames.com/roguelegacy/" target="_blank"> Rogue Legacy</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_visual_novels" href="https://motion-twin.com/en/" target="_blank">Motion Twin</a>,
                        <a className="a_visual_novels" href="https://www.orithegame.com/moon-studios/" target="_blank"> Moon Studios</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}