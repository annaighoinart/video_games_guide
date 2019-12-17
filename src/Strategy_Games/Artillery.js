import React from 'react';
import './Strategy_Games.css'

export default function Artillery() {
    return(
        <div className="artillery_div">
            <h2 className="artillery_red_text">Artillery</h2>
            <br />
            <p>A general name given to two- or three-player turn-based games
                featuring tanks or other soldiers engaged in combat.
                Some of the earliest computer games were artillery games developed for
                the military to train soldiers how to plot rocket trajectories.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_artillery" href="https://www.farming-simulator.com/" target="_blank">Farming Simulator</a>,
                        <a className="a_artillery" href="https://eurotrucksimulator2.com/" target="_blank"> Euro Truck Simulator</a>,
                        <a className="a_artillery" href="https://www.flightsimulator.com/" target="_blank"> Flight Simulator</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_artillery" href="https://giants-software.com/" target="_blank">Giants Software</a>,
                        <a className="a_artillery" href="https://scssoft.com/" target="_blank"> SCS Software</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}