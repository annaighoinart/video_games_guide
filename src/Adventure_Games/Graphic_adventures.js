import React from 'react';
import './Adventure_Games.css'

export default function Graphic_adventures() {
    return(
        <div className="graphic_adventures_div">
            <h2 className="graphic_adventures_red_text">Graphic adventures</h2>
            <br />
            <p>As computers became more capable of creating graphics to support text,
                games evolved as well. For instance, early graphic adventure games used
                simple images to support the still text-based adventure. Later, as the mouse
                evolved into a game controller, games started to replace written text commands,
                and players began to “point-and-click” to interact with an on-screen object.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_graphic_adventures" href="https://www.orithegame.com/" target="_blank">Ori and the Blind Forest</a>,
                        <a className="a_graphic_adventures" href="https://dead-cells.com/" target="_blank"> Dead Cells</a>,
                        <a className="a_graphic_adventures" href="http://www.cellardoorgames.com/roguelegacy/" target="_blank"> Rogue Legacy</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_graphic_adventures" href="https://motion-twin.com/en/" target="_blank">Motion Twin</a>,
                        <a className="a_graphic_adventures" href="https://www.orithegame.com/moon-studios/" target="_blank"> Moon Studios</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}