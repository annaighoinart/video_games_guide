import React from 'react';
import './Sports_Games.css'

export default function Competitive() {
    return(
        <div className="competitive_div">
            <h2 className="competitive_red_text">Competitive</h2>
            <br />
            <p>Fictional sport or competitive games fall into this category.
                eSport games like Overwatch and Team Fortress have also been assigned to this subgenre.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_competitive" href="https://playoverwatch.com/en-us/" target="_blank">Overwatch</a>,
                        <a className="a_competitive" href="https://rainbow6.ubisoft.com/siege/en-US/home/index.aspx" target="_blank"> Rainbow Six: Siege</a>,
                        <a className="a_competitive" href="https://www.epicgames.com/fortnite/en-US/home" target="_blank"> Fortnite</a>,
                        <a className="a_competitive" href="https://www.epicgames.com/unrealtournament/" target="_blank"> Unreal Tournament</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_competitive" href="https://www.epicgames.com/" target="_blank">EPIC Games</a>,
                        <a className="a_competitive" href="https://www.blizzard.com" target="_blank"> Blizzard</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}