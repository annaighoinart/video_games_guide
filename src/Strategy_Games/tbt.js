import React from 'react';
import './Strategy_Games.css'

export default function Tbt() {
    return(
        <div className="tbt_div">
            <h2 className="tbt_red_text">Turn-based Tactics</h2>
            <br />
            <p>Based on and mostly using realistic military tactics, turn-based tactics games
                pit combat forces against each other in volley-like gameplay. Fire Emblem and
                Final Fantasy Tactics are two of the more well-known games in this category.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_tbt" href="https://fireemblem.nintendo.com/" target="_blank">Fire Emblem</a>,
                        <a className="a_tbt" href="http://dlgames.square-enix.com/fft/en/" target="_blank"> Final Fantasy Tactics</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_tbt" href="https://www.square-enix.com/" target="_blank">Square Enix</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}