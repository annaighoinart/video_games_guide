import React from 'react';
import './Strategy_Games.css'

export default function Td() {
    return(
        <div className="td_div">
            <h2 className="td_red_text">Tower Defence</h2>
            <br />
            <p>In tower defense games, players must fend off computer-controlled enemies
                (often referred to as “creeps”) to win. Tower abilities and creep movements
                vary from game to game, but usually tower defense games give different towers
                different abilities, such as the ability to slow down creeps or poison them. When
                a player kills enough creeps, they're awarded credits to purchase more towers or
                buy upgrades to increase something like weapon power or range.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_td" href="https://www.ea.com/studios/popcap/plants-vs-zombies" target="_blank">Plants vs. Zombies</a>,
                        <a className="a_td" href="https://www.kingdomrush.com/" target="_blank"> Kingdom Rush</a>,
                        <a className="a_td" href="https://robotentertainment.com/omd3" target="_blank"> Orcs Must Die!</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_td" href="https://www.ea.com/studios/popcap" target="_blank">PopCap</a>,
                        <a className="a_td" href="https://robotentertainment.com/" target="_blank"> Robot</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}