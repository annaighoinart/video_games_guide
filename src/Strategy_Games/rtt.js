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
                        <a className="a_rtt" href="http://www.feralinteractive.com/ru/mac-games/rometw/" target="_blank">Rome: Total War</a>,
                        <a className="a_rtt" href="http://www.totalwar.com/shogun2" target="_blank"> Total War: Shogun</a>,
                        <a className="a_rtt" href="https://warhammer.totalwar.com/" target="_blank"> Total War: Warhammer</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_rtt" href="http://www.creative-assembly.com/" target="_blank">Creative Assembly</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}