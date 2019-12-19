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
                        <a className="a_wargame" href="http://www.ontargetsimulations.com/" target="_blank">Flashpoint Campaigns: Red Storm</a>,
                        <a className="a_wargame" href="https://www.firaxis.com/?/games/single/sid-meiers-ace-patrol" target="_blank"> Sid Meier’s Ace Patrol</a>,
                        <a className="a_wargame" href="http://www.panthergames.com/" target="_blank"> Command Ops</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_wargame" href="http://www.firaxis.com/" target="_blank">Firaxis</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}