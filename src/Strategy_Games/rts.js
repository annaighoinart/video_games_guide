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
                        <a className="a_rts" href="https://www.farming-simulator.com/" target="_blank">Farming Simulator</a>,
                        <a className="a_rts" href="https://eurotrucksimulator2.com/" target="_blank"> Euro Truck Simulator</a>,
                        <a className="a_rts" href="https://www.flightsimulator.com/" target="_blank"> Flight Simulator</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_rts" href="https://giants-software.com/" target="_blank">Giants Software</a>,
                        <a className="a_rts" href="https://scssoft.com/" target="_blank"> SCS Software</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}