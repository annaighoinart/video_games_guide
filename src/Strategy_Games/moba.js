import React from 'react';
import './Strategy_Games.css'

export default function Moba() {
    return(
        <div className="moba_div">
            <h2 className="moba_red_text">Multiplayer online battle arena</h2>
            <br />
            <p>This category combines action games, role-playing games,
                and real-time strategy games. In this subgenre of strategy games,
                players usually don't build resources such as bases or combat units.
                Instead, players control a single character in one of two teams, working
                together to try and destroy the other team’s base (they are often aided in
                the task by the help of computer-controlled units that attack on a set path).
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_moba" href="https://www.farming-simulator.com/" target="_blank">Farming Simulator</a>,
                        <a className="a_moba" href="https://eurotrucksimulator2.com/" target="_blank"> Euro Truck Simulator</a>,
                        <a className="a_moba" href="https://www.flightsimulator.com/" target="_blank"> Flight Simulator</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_moba" href="https://giants-software.com/" target="_blank">Giants Software</a>,
                        <a className="a_moba" href="https://scssoft.com/" target="_blank"> SCS Software</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}