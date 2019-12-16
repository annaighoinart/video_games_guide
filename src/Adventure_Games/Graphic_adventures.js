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
                        <a className="a_graphic_adventures" href="https://freebirdgames.com/to_the_moon/" target="_blank">To The Moon</a>,
                        <a className="a_graphic_adventures" href="http://www.grimremastered.com/" target="_blank"> Grim Fandango</a>,
                        <a className="a_graphic_adventures" href="http://www.nightinthewoods.com/" target="_blank"> Night in the Woods</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_graphic_adventures" href="https://fullbrig.ht/" target="_blank">FullBright</a>,
                        <a className="a_graphic_adventures" href="https://www.camposanto.com/" target="_blank"> Campo Santo</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}