import React from 'react';
import './Strategy_Games.css'

export default function Tbs() {
    return(
        <div className="tbs_div">
            <h2 className="tbs_red_text">Turn-based Strategy</h2>
            <br />
            <p>This category is used to differentiate turn-based strategy games from real-time strategy ones.
                A turn-based strategy game gives players a length of time (or turn) in which to take action.
                But like an RTS game, the genre can include games that are not exclusively turn-based.
                Another subgenre is developing from this category: simultaneous turn-based strategy (STBS) games
                are just that—games that let players and opponents interrupt actions and change the gameplay, simultaneously.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_tbs" href="https://www.farming-simulator.com/" target="_blank">Farming Simulator</a>,
                        <a className="a_tbs" href="https://eurotrucksimulator2.com/" target="_blank"> Euro Truck Simulator</a>,
                        <a className="a_tbs" href="https://www.flightsimulator.com/" target="_blank"> Flight Simulator</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_tbs" href="https://giants-software.com/" target="_blank">Giants Software</a>,
                        <a className="a_tbs" href="https://scssoft.com/" target="_blank"> SCS Software</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}