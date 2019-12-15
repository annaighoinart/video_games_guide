import React from 'react';
import './Action_Games.css'

export default function Beat_em_up() {
    return(
        <div className="beat_em_up_div">
            <h2 className="beat_em_up_red_text">Beat-em-up</h2>
            <br />
            <p>Beat-em up games, or brawlers, also focus on combat,
                but instead of facing a single opponent, players face wave after
                wave of enemies. Double Dragon was one of the earliest beat-em ups,
                while God of War, Castle Crashers, and Bayonetta are more recent ones.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_beat_em_up" href="https://www.castlecrashers.com/" target="_blank">Castle Crashers</a>,
                        <a className="a_beat_em_up" href="https://lecartelstudio.fr/" target="_blank"> Mother Russia Bleeds</a>,
                        <a className="a_beat_em_up" href="https://yakuza.sega.com/" target="_blank"> Yakuza</a>,
                        <a className="a_beat_em_up" href="https://godofwar.playstation.com/" target="_blank"> God of War</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_beat_em_up" href="https://www.devolverdigital.com/" target="_blank">Devolver Digital</a>,
                        <a className="a_beat_em_up" href="http://www.readyatdawn.com/" target="_blank"> Ready at Dawn</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}