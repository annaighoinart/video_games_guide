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
                        <a className="a_sbfighting" href="https://www.ea.com/games/ufc/ufc-3" target="_blank">UFC</a>,
                        Rocky Legends,
                        <a className="a_sbfighting" href="https://www.ea.com/games/fight-night/fight-night-champion" target="_blank"> Fight Night: Champion</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_sbfighting" href="https://www.ea.com/" target="_blank">EA</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}