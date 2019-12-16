import React from 'react';
import './Role_Playing_Games.css'

export default function Mmorpg() {
    return(
        <div className="mmorpg_div">
            <h2 className="mmorpg_red_text">MMORPG</h2>
            <br />
            <p>Massive multiplayer online role-playing games (or MMORPGs) evolved as
                graphical variations of text-based multi-user dungeons (MUDs), which were developed in the late 1970s.
                MMORPGs involve hundreds of players actively interacting with each other in the same world, and
                typically, all players share the same or a similar objective.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_mmorpg" href="https://worldofwarcraft.com/en-us/" target="_blank">World of Warcraft</a>,
                        <a className="a_mmorpg" href="https://www.lineage2.com/" target="_blank"> Lineage 2</a>,
                        <a className="a_mmorpg" href="https://www.eveonline.com/" target="_blank"> EVE Online</a>,
                        <a className="a_mmorpg" href="https://uo.com/" target="_blank"> Ultima Online</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_mmorpg" href="https://www.blizzard.com" target="_blank">Blizzard</a>,
                        <a className="a_mmorpg" href="https://us.ncsoft.com/en" target="_blank"> NCSOFT</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}