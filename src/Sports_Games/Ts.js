import React from 'react';
import './Sports_Games.css'

export default function Ts() {
    return(
        <div className="ts_div">
            <h2 className="ts_red_text">Team sports</h2>
            <br />
            <p>One of the earliest types of video games genres, team sports games simulate
                playing a sport. Some games, like Arch Rivals and NBA Jam, satirize the genre,
                while others like Madden NFL and FIFA look to recreate the realism and capture
                the feeling of playing a live sport.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_ts" href="https://www.ea.com/games/fifa/fifa-20" target="_blank">FIFA</a>,
                        <a className="a_ts" href="https://www.ea.com/games/nba" target="_blank"> NBA</a>,
                        <a className="a_ts" href="https://www.ea.com/games/madden-nfl/madden-nfl-20" target="_blank"> Madden NFL</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_ts" href="https://www.ea.com/" target="_blank">EA</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}