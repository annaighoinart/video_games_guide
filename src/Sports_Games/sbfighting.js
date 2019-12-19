import React from 'react';
import './Sports_Games.css'

export default function Sbfighting() {
    return(
        <div className="sbfighting_div">
            <h2 className="sbfighting_red_text">Sports-based fighting</h2>
            <br />
            <p>Rooted firmly in the fighting game and sports genre, these
                games include boxing games like Fight Night and wrestling video games.
                In these games, the fighting is more realistic and can feature real-world fighters.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_sbfighting" href="https://www.forzamotorsport.net/" target="_blank">Forza Motorsport</a>,
                        <a className="a_sbfighting" href="https://www.gran-turismo.com" target="_blank"> Gran Turismo</a>,
                        <a className="a_sbfighting" href="https://www.ea.com/games/need-for-speed" target="_blank"> Need For Speed</a>,
                        <a className="a_sbfighting" href="https://www.projectcarsgame.com/" target="_blank"> Project Cars</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_sbfighting" href="http://www.ghostgames.com/" target="_blank">Ghost Games</a>,
                        <a className="a_sbfighting" href="http://www.polyphony.co.jp/" target="_blank"> Polyphony</a>,
                        <a className="a_sbfighting" href="https://www.forzamotorsport.net/en-us/turn10" target="_blank"> Turn 10</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}