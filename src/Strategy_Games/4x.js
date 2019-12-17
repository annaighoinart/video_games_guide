import React from 'react';
import './Strategy_Games.css'

export default function Four_x() {
    return(
        <div className="four_x_div">
            <h2 className="four_x_red_text">4X</h2>
            <br />
            <p>A 4x is any genre of strategy video game whose four primary
                goals check these boxes: explore, expand, exploit, and exterminate.
                Sid Meier’s Civilization series is probably the best-known strategy gam
                in this category. Because of the underlying goals, most of these games have
                historical settings and span eons of a civilization’s (human or extraterrestrial) history.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_four_x" href="https://www.farming-simulator.com/" target="_blank">Farming Simulator</a>,
                        <a className="a_four_x" href="https://eurotrucksimulator2.com/" target="_blank"> Euro Truck Simulator</a>,
                        <a className="a_four_x" href="https://www.flightsimulator.com/" target="_blank"> Flight Simulator</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_four_x" href="https://giants-software.com/" target="_blank">Giants Software</a>,
                        <a className="a_four_x" href="https://scssoft.com/" target="_blank"> SCS Software</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}