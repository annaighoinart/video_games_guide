import React from 'react';
import './Adventure_Games.css'

export default function Visual_novels() {
    return(
        <div className="visual_novels_div">
            <h2 className="visual_novels_red_text">Visual Novels</h2>
            <br />
            <p>Extremely popular in Japan, most visual novels require players to build up
                character traits or statistics to advance the gameplay. The games often have
                multiple endings which are determined by how the player responds to specific
                points in the plot. Dating and legal simulations (Ace Attorney for the Nintendo DS,
                for example) are popular themes for many visual novels.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_visual_novels" href="http://everlastingsummer.su/en/" target="_blank">Everlasting Summer</a>,
                        <a className="a_visual_novels" href="http://clione.halfmoon.jp/hatoful-boyfriend/english.html" target="_blank"> Hatoful Boyfriend</a>,
                        <a className="a_visual_novels" href="https://waifubartending.com/" target="_blank"> VA-11 HALL-A</a>,
                        <a className="a_visual_novels" href="http://steins-gate.us/" target="_blank"> Steins;Gate</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_visual_novels" href="https://sovietgames.su/?lang=en" target="_blank">Soviet Games</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}