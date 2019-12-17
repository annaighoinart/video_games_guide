import React from 'react';
import './Strategy_Games.css'

export default function Wargame() {
    return(
        <div className="wargame_div">
            <h2 className="wargame_red_text">Wargame</h2>
            <br />
            <p>A subgenre of strategy video games, a wargame focuses gameplay on map-based
                tactical or strategic warfare. Games like Real War can be played out as turn-based events or in real-time.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_wargame" href="https://www.farming-simulator.com/" target="_blank">Farming Simulator</a>,
                        <a className="a_wargame" href="https://eurotrucksimulator2.com/" target="_blank"> Euro Truck Simulator</a>,
                        <a className="a_wargame" href="https://www.flightsimulator.com/" target="_blank"> Flight Simulator</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_wargame" href="https://giants-software.com/" target="_blank">Giants Software</a>,
                        <a className="a_wargame" href="https://scssoft.com/" target="_blank"> SCS Software</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}