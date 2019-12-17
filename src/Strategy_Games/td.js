import React from 'react';
import './Strategy_Games.css'

export default function Td() {
    return(
        <div className="td_div">
            <h2 className="td_red_text">Tower Defence</h2>
            <br />
            <p>In tower defense games, players must fend off computer-controlled enemies
                (often referred to as “creeps”) to win. Tower abilities and creep movements
                vary from game to game, but usually tower defense games give different towers
                different abilities, such as the ability to slow down creeps or poison them. When
                a player kills enough creeps, they're awarded credits to purchase more towers or
                buy upgrades to increase something like weapon power or range.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_td" href="https://www.farming-simulator.com/" target="_blank">Farming Simulator</a>,
                        <a className="a_td" href="https://eurotrucksimulator2.com/" target="_blank"> Euro Truck Simulator</a>,
                        <a className="a_td" href="https://www.flightsimulator.com/" target="_blank"> Flight Simulator</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_td" href="https://giants-software.com/" target="_blank">Giants Software</a>,
                        <a className="a_td" href="https://scssoft.com/" target="_blank"> SCS Software</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}