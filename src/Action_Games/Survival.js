import React from 'react';
import './Action_Games.css'

export default function Survival() {
    return(
        <div className="survival_div">
            <h2 className="survival_red_text">Survival</h2>
            <br />
            <p>A subgenre of action games, survival action
                games have really come into their own over the past few years.
                The survival horror game Resident Evil was one of the earliest
                (though a linear game), while more modern survival games like
                Fortnite: Save the World take place in open-world game environments and give players
                access to resources to craft tools, weapons, and shelter to survive as long as possible.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_survival" href="https://rust.facepunch.com/" target="_blank">Rust</a>,
                        <a className="a_survival" href="https://www.minecraft.net/en-us/" target="_blank"> Minecraft</a>,
                        <a className="a_survival" href="https://www.bohemia.net/games/dayz" target="_blank"> DayZ</a>,
                        <a className="a_survival" href="https://endnightgames.com/games/the-forest" target="_blank"> The Forest</a>,
                        <a className="a_survival" href="https://www.klei.com/games/dont-starve" target="_blank"> Don't Starve</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_survival" href="https://facepunch.com/" target="_blank">Face Punch</a>,
                        <a className="a_survival" href="https://www.klei.com/" target="_blank"> Klei</a>,
                        <a className="a_survival" href="https://www.mojang.com/" target="_blank"> Mojang</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}