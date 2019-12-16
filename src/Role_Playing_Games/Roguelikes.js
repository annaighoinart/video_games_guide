import React from 'react';
import './Role_Playing_Games.css'

export default function Roguelikes() {
    return(
        <div className="roguelikes_div">
            <h2 className="roguelikes_red_text">Roguelikes</h2>
            <br />
            <p>The only other game genre based on the name of the game that inspired it, Rogue
                was a 2D computer game and dungeon crawler from 1980. The game featured a text
                interface and random level generation. Players overcame enemies and obstacles to increase their player stats.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_roguelikes" href="https://spelunkyworld.com/" target="_blank">Spelunky</a>,
                        <a className="a_roguelikes" href="https://bindingofisaac.com/" target="_blank"> Binding of Isaac</a>,
                        <a className="a_roguelikes" href="https://www.darkestdungeon.com/" target="_blank"> Darkest Dungeon</a>,
                        <a className="a_roguelikes" href="http://www.bay12games.com/dwarves/" target="_blank"> Dwarf Fortress</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_roguelikes" href="https://twitter.com/edmundmcmillen" target="_blank">Edmund McMillen</a>,
                        <a className="a_roguelikes" href="https://chucklefish.org/" target="_blank"> ChuckleFish</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}