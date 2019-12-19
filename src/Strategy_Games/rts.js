import React from 'react';
import './Strategy_Games.css'

export default function Rts() {
    return(
        <div className="rts_div">
            <h2 className="rts_red_text">Real-time Strategy</h2>
            <br />
            <p>Real-time strategy games require the player to collect and maintain resources,
                like bases, while advancing and developing both resources and combat units.
                Starcraft is the most popular RTS, while The Age of Empires series and Command
                and Conquer are also well-known game franchises in this category.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_rts" href="https://playwarcraft3.com/" target="_blank">Warcraft</a>,
                        <a className="a_rts" href="https://starcraft2.com" target="_blank"> Starcraft</a>,
                        <a className="a_rts" href="https://www.ageofempires.com/" target="_blank"> Age of Empires</a>,
                        <a className="a_rts" href="https://www.worldoftropico.com" target="_blank"> Tropico</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_rts" href="https://www.blizzard.com/" target="_blank">Blizzard</a>,
                        <a className="a_rts" href="https://www.relic.com/" target="_blank"> Relic</a>,
                        <a className="a_rts" href="http://www.haemimontgames.com/" target="_blank"> Haemimont</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}