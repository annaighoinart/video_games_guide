import React from 'react';
import './Strategy_Games.css'

export default function Rtt() {
    return(
        <div className="rtt_div">
            <h2 className="rtt_red_text">Real-time Tactics</h2>
            <br />
            <p>Sometimes considered a subgenre of real-time strategy, real-time
                tactics games focus on battlefield tactics and operational warfare versus
                the micromanagement of resources or individual units.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_rtt" href="https://www.farming-simulator.com/" target="_blank">Farming Simulator</a>,
                        <a className="a_rtt" href="https://eurotrucksimulator2.com/" target="_blank"> Euro Truck Simulator</a>,
                        <a className="a_rtt" href="https://www.flightsimulator.com/" target="_blank"> Flight Simulator</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_rtt" href="https://giants-software.com/" target="_blank">Giants Software</a>,
                        <a className="a_rtt" href="https://scssoft.com/" target="_blank"> SCS Software</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}