import React from 'react';
import './Simulation_Games.css'

export default function Vehicle_simulation() {
    return(
        <div className="vehicle_simulation_div">
            <h2 className="vehicle_simulation_red_text">Vehicle simulation</h2>
            <br />
            <p>It’s difficult to rank the most popular vehicle simulation games because
                sales are equally split between flight simulations and racing simulations.
                Vehicle simulations aim to recreate the experience of flying an airplane,
                driving a race car, and in some cases, driving a tractor on a farm.
                Vehicular simulations can incorporate combat, in the case of flight sims.
                This category includes space flight simulators and train simulators.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_vehicle_simulation" href="https://www.farming-simulator.com/" target="_blank">Farming Simulator</a>,
                        <a className="a_vehicle_simulation" href="https://eurotrucksimulator2.com/" target="_blank"> Euro Truck Simulator</a>,
                        <a className="a_vehicle_simulation" href="https://www.flightsimulator.com/" target="_blank"> Flight Simulator</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_vehicle_simulation" href="https://giants-software.com/" target="_blank">Giants Software</a>,
                        <a className="a_vehicle_simulation" href="https://scssoft.com/" target="_blank"> SCS Software</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}