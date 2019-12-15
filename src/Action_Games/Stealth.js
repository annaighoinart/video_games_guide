import React from 'react';
import './Action_Games.css'

export default function Stealth() {
    return(
        <div className="stealth_div">
            <h2 className="stealth_red_text">Stealth</h2>
            <br />
            <p>Stealth games stress cunning and precision to
                resolve game challenges, and while other action
                or combat may help players accomplish the goal,
                like in Dishonored, stealth games usually encourage
                players to engage in the action covertly. Metal Gear built
                a franchise name on this subcategory.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_stealth" href="https://www.naughtydog.com/blog/the_last_of_us_part_ii" target="_blank">The Last of Us</a>,
                        <a className="a_stealth" href="https://dishonored.bethesda.net/" target="_blank"> Dishonored</a>,
                        <a className="a_stealth" href="https://www.hitman.com/" target="_blank"> Hitman</a>,
                        <a className="a_stealth" href="https://square-enix-games.com/en_GB/games/thief/" target="_blank"> Thief</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_stealth" href="http://naughtydog.com/" target="_blank">Naughty Dog</a>,
                        <a className="a_stealth" href="https://www.ioi.dk/" target="_blank"> IO</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}