import React from 'react';
import './Simulation_Games.css'

export default function Cm_simulation() {
    return(
        <div className="cm_simulation_div">
            <h2 className="cm_simulation_red_text">Construction and management simulation</h2>
            <br />
            <p>SimCity is the most popular construction and management simulation of all time.
                The game simulates the building and management of a city, including street planning,
                zoning, and taxing city residents.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_cm_simulation" href="https://www.ea.com/games/simcity?setLocale=en-us" target="_blank">Sim City</a>,
                        <a className="a_cm_simulation" href="https://www.paradoxplaza.com/cities-skylines-all/" target="_blank"> Citites: Skylines</a>,
                        <a className="a_cm_simulation" href="https://www.paradoxplaza.com/surviving-mars/" target="_blank"> Surviving Mars</a>,
                        <a className="a_cm_simulation" href="http://www.frostpunkgame.com/" target="_blank"> Frostpunk</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_cm_simulation" href="https://www.paradoxplaza.com/" target="_blank">Paradox</a>,
                        <a className="a_cm_simulation" href="https://www.ea.com/studios/maxis" target="_blank"> Maxis</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}