import React from 'react';
import './Strategy_Games.css'

export default function Gsw() {
    return(
        <div className="gsw_div">
            <h2 className="gsw_red_text">Grand strategy wargame</h2>
            <br />
            <p>This is a wargame that focuses on a grand strategy, which typically
                involves placing a nation or empire’s army and resources into action to achieve a goal.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_gsw" href="https://www.paradoxplaza.com/stellaris-all/" target="_blank">Stellaris</a>,
                        <a className="a_gsw" href="https://www.crusaderkings.com/" target="_blank"> Crusader Kings 2</a>,
                        <a className="a_gsw" href="https://www.matrixgames.com/game/distant-worlds" target="_blank"> Distant Worlds: Universe</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_gsw" href="https://www.paradoxplaza.com/" target="_blank">Paradox</a>,
                        <a className="a_gsw" href="http://www.codeforce.co.nz/" target="_blank"> Codeforce</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}