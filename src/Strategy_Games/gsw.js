import React from 'react';
import './Strategy_Games.css'

export default function Gsw() {
    return(
        <div className="gsw_div">
            <h2 className="gsw_red_text">Grand strategy wargame</h2>
            <br />
            <p>This is a wargame that focuses on a grand strategy, which typically
                involves placing a nation or empire’s army and resources into action to achieve a goal.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_gsw" href="https://www.farming-simulator.com/" target="_blank">Farming Simulator</a>,
                        <a className="a_gsw" href="https://eurotrucksimulator2.com/" target="_blank"> Euro Truck Simulator</a>,
                        <a className="a_gsw" href="https://www.flightsimulator.com/" target="_blank"> Flight Simulator</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_gsw" href="https://giants-software.com/" target="_blank">Giants Software</a>,
                        <a className="a_gsw" href="https://scssoft.com/" target="_blank"> SCS Software</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}