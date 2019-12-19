import React from 'react';
import './Sports_Games.css'

export default function Competitive() {
    return(
        <div className="competitive_div">
            <h2 className="competitive_red_text">Competitive</h2>
            <br />
            <p>Fictional sport or competitive games fall into this category.
                eSport games like Overwatch and Team Fortress have also been assigned to this subgenre.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_competitive" href="https://www.forzamotorsport.net/" target="_blank">Forza Motorsport</a>,
                        <a className="a_competitive" href="https://www.gran-turismo.com" target="_blank"> Gran Turismo</a>,
                        <a className="a_competitive" href="https://www.ea.com/games/need-for-speed" target="_blank"> Need For Speed</a>,
                        <a className="a_competitive" href="https://www.projectcarsgame.com/" target="_blank"> Project Cars</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_competitive" href="http://www.ghostgames.com/" target="_blank">Ghost Games</a>,
                        <a className="a_competitive" href="http://www.polyphony.co.jp/" target="_blank"> Polyphony</a>,
                        <a className="a_competitive" href="https://www.forzamotorsport.net/en-us/turn10" target="_blank"> Turn 10</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}