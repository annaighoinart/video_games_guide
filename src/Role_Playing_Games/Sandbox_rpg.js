import React from 'react';
import './Role_Playing_Games.css'

export default function Sandbox_rpg() {
    return(
        <div className="sandbox_rpg_div">
            <h2 className="sandbox_rpg_red_text">Sandbox RPG</h2>
            <br />
            <p>Sandbox, or open-world, role-playing games allow players to freely roam their
                game environments in search of adventure. These are some of the most immersive
                and engaging video game experiences available, because the massive amount of game
                characters and situations required to populate side quests and supporting storylines
                enable game developers to create almost lifelike virtual worlds.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_sandbox_rpg" href="https://www.taleworlds.com/en/Games/MountAndBlade" target="_blank">Mount&Blade</a>,
                        <a className="a_sandbox_rpg" href="https://playstarbound.com/" target="_blank"> Starbound</a>,
                        <a className="a_sandbox_rpg" href="https://terraria.org/" target="_blank"> Terraria</a>,
                        <a className="a_sandbox_rpg" href="https://www.minecraft.net/en-us/" target="_blank"> Minecraft</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_sandbox_rpg" href="https://www.taleworlds.com/en/Home" target="_blank">TaleWorlds</a>,
                        <a className="a_sandbox_rpg" href="https://chucklefish.org/" target="_blank"> Chucklefish</a>,
                        <a className="a_sandbox_rpg" href="https://re-logic.com/" target="_blank"> Re-Logic</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}