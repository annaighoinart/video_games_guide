import React from 'react';
import './Strategy_Games.css'

export default function Moba() {
    return(
        <div className="moba_div">
            <h2 className="moba_red_text">Multiplayer online battle arena</h2>
            <br />
            <p>This category combines action games, role-playing games,
                and real-time strategy games. In this subgenre of strategy games,
                players usually don't build resources such as bases or combat units.
                Instead, players control a single character in one of two teams, working
                together to try and destroy the other team’s base (they are often aided in
                the task by the help of computer-controlled units that attack on a set path).
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_moba" href="dota2.com" target="_blank">Dota 2</a>,
                        <a className="a_moba" href="https://na.leagueoflegends.com/en/" target="_blank"> League of Legends</a>,
                        <a className="a_moba" href="https://heroesofthestorm.com/" target="_blank"> Heroes of the Storm</a>,
                        <a className="a_moba" href="https://www.smitegame.com/" target="_blank"> Smite</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_moba" href="https://www.hirezstudios.com/" target="_blank">Hi-Rez</a>,
                        <a className="a_moba" href="https://www.valvesoftware.com/" target="_blank"> Valve</a>,
                        <a className="a_moba" href="https://www.riotgames.com/en" target="_blank"> Riot</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}