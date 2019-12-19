import React from 'react';
import './Puzzle_Games.css'

export default function Logic() {
    return(
        <div className="logic_div">
            <h2 className="logic_red_text">Logic Games</h2>
            <br />
            <p className="logic_description">A logic game requires players to solve a logic puzzle or navigate a
                challenge like a maze. These games include brain games like Brain Age,
                but also include such casual puzzle games as Tetris.
            </p>
            <br />
            <div className="row">
                <div className="col logic_col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_logic" href="http://www.thinkwithportals.com/about.php" target="_blank">Portal</a>,
                        <a className="a_logic" href="http://www.croteam.com/talosprinciple/" target="_blank"> The Talos Principle</a>,
                        <a className="a_logic" href="https://keeptalkinggame.com/" target="_blank"> Keep Talking and Nobody Explodes</a>,
                        <a className="a_logic" href="https://amanita-design.net/games/machinarium.html" target="_blank"> Machinarium</a>
                    </h5>
                </div>
                <div className="col logic_col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_logic" href="https://www.valvesoftware.com/" target="_blank">Valve</a>,
                        <a className="a_logic" href="https://amanita-design.net/index.html" target="_blank"> Amanita</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}