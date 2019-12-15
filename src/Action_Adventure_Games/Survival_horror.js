import React from 'react';
import './Action_adventure_games.css'

export default function Survival_horror() {
    return(
        <div className="survival_horror_div">
            <h2 className="survival_horror_red_text">Survival Horror</h2>
            <br />
            <p>Survival horror games like Resident Evil use mature
                themes and subject matter to portray grisly and gruesome
                settings (many of these games use blood and gore and are
                intended only for mature audiences). Such titles deliver nail-biting
                excitement amplified by a key game mechanic: limited resources like ammunition or finite weapons.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_survival_horror" href="https://amnesiagame.com" target="_blank">Amnesia</a>,
                        <a className="a_survival_horror" href="https://www.residentevil.com/" target="_blank"> Resident Evil</a>,
                        <a className="a_survival_horror" href="https://www.ea.com/games/dead-space" target="_blank"> Dead Space</a>,
                        <a className="a_survival_horror" href="https://redbarrelsgames.com/" target="_blank"> Outlast</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_survival_horror" href="https://www.frictionalgames.com/site/" target="_blank">Frictional Games</a>,
                        <a className="a_survival_horror" href="http://www.capcom-europe.com/" target="_blank"> Capcom</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}