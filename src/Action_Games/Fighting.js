import React from 'react';
import './Action_Games.css'

export default function Fighting() {
    return(
        <div className="fighting_div">
            <h2 className="fighting_red_text">Fighting</h2>
            <br />
            <p>Fighting games like Mortal Kombat and Street Fighter II 
                focus the action on combat, and in most cases, hand-to-hand 
                combat. Most fighting games feature a stable of playable characters 
                each one specializing in their own unique abilities or fighting style. 
                In most traditional fighting games, players fight their way to the top, 
                taking on more and more difficult opponents as they progress.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_fighting" href="https://www.mortalkombat.com/" target="_blank">Mortal Kombat</a>,
                        <a className="a_fighting" href="https://www.injustice.com/" target="_blank"> Injustice</a>,
                        <a className="a_fighting" href="https://streetfighter.com/" target="_blank"> Street Fighter</a>,
                        <a className="a_fighting" href="https://tk7.tekken.com/" target="_blank"> Tekken</a>,
                        <a className="a_fighting" href="https://en.bandainamcoent.eu/soulcalibur/soulcalibur-vi" target="_blank"> Soulcalibur</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_fighting" href="http://www.netherrealm.com/" target="_blank">Nether Realm</a>,
                        <a className="a_fighting" href="https://en.bandainamcoent.eu/" target="_blank"> Bandai Namco</a>,
                        <a className="a_fighting" href="http://www.capcom-europe.com/" target="_blank"> Capcom</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}