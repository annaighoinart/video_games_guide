import React from 'react';
import './Adventure_Games.css'

export default function Text_adventures() {
    return(
        <div className="text_adventures_div">
            <h2 className="text_adventures_red_text">Text adventures</h2>
            <br />
            <p>Early text adventure games were called "interactive fiction." And just as the
                name implies, the gameplay is text-based, meaning players use their keyboard to
                input commands in response to the game-programmed story arch or situation, such as
                “get shovel,” “grab sword,” or “go North.” With text adventures, programmers spend quite
                a bit of development time working out various responses to the players’ inputs.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_text_adventures" href="http://textadventures.co.uk/games/play/5zyoqrsugeopel3ffhz_vq" target="_blank">Zork</a>,
                        <a className="a_text_adventures" href="https://eblong.com/zarf/zweb/dreamhold/" target="_blank"> Dreamhold</a>,
                        <a className="a_text_adventures" href="https://eblong.com/zarf/zweb/tangle/" target="_blank"> Spider And Web</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        Text adventures are often made by a single person, so no notable developers here
                    </h5>
                </div>
            </div>
        </div>
    );
}