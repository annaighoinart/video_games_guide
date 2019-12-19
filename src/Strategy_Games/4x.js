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
                        <a className="a_four_x" href="https://civilization.com/" target="_blank">Sid Meier's Civilization</a>,
                        <a className="a_four_x" href="https://www.paradoxplaza.com/europa-universalis-all/" target="_blank"> Europa Universalis</a>,
                        <a className="a_four_x" href="https://www.aow-planetfall.com/" target="_blank"> Age of Wonders</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_four_x" href="https://www.firaxis.com/" target="_blank">Firaxis</a>,
                        <a className="a_four_x" href="https://www.paradoxplaza.com/" target="_blank"> Paradox</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}