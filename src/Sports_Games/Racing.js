import React from 'react';
import './Sports_Games.css'

export default function Racing() {
    return(
        <div className="racing_div">
            <h2 className="racing_red_text">Racing Games</h2>
            <br />
            <p>Racing simulator series like Forza and Gran Turismo are some of the most popular
                games in this category, but arcade classics like Pole Position are included here
                too. In these games, players race against another opponent or the clock.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_racing" href="https://www.forzamotorsport.net/" target="_blank">Forza Motorsport</a>,
                        <a className="a_racing" href="https://www.gran-turismo.com" target="_blank"> Gran Turismo</a>,
                        <a className="a_racing" href="https://www.ea.com/games/need-for-speed" target="_blank"> Need For Speed</a>,
                        <a className="a_racing" href="https://www.projectcarsgame.com/" target="_blank"> Project Cars</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_racing" href="http://www.ghostgames.com/" target="_blank">Ghost Games</a>,
                        <a className="a_racing" href="http://www.polyphony.co.jp/" target="_blank"> Polyphony</a>,
                        <a className="a_racing" href="https://www.forzamotorsport.net/en-us/turn10" target="_blank"> Turn 10</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}