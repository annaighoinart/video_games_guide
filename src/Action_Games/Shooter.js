import React from 'react';
import './Action_Games.css'

export default function Shooter() {
    return(
        <div className="shooter_div">
            <h2 className="shooter_red_text">Shooter</h2>
            <br />
            <p>Shooters let players use weapons to engage in the action, 
                with the goal usually being to take out enemies or opposing 
                players. Shooters are categorized by the player perspective: 
                First-person shooters (FPS) are played from the main character’s viewpoint; 
                Call of Duty, Half-Life, and Halo are good examples. With third-person shooters 
                like Fortnite and Splatoon, the action takes place from a viewpoint where the 
                player can see the main character, usually from slightly above and behind.
            </p>
            <br />
            <div className="row">
                <div className="col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_shooter" href="https://www.callofduty.com/ru/" target="_blank">Call Of Duty</a>,
                        <a className="a_shooter" href="https://www.epicgames.com/fortnite/en-US/home" target="_blank"> Fortnite</a>,
                        <a className="a_shooter" href="https://borderlands.com/en-US/#-" target="_blank"> Borderlands</a>,
                        <a className="a_shooter" href="https://www.ea.com/games/titanfall/titanfall-2?setLocale=en-us" target="_blank"> Titanfall</a>,
                        <a className="a_shooter" href="https://far-cry.ubisoft.com/game/en-us/home" target="_blank"> Far Cry</a>
                    </h5>
                </div>
                <div className="col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_shooter" href="https://www.infinityward.com/" target="_blank">Infinity Ward</a>,
                        <a className="a_shooter" href="https://peoplecanfly.com/" target="_blank"> People Can Fly</a>,
                        <a className="a_shooter" href="https://www.gearboxsoftware.com/" target="_blank"> Gearbox</a>,
                        <a className="a_shooter" href="https://www.respawn.com/" target="_blank"> Respawn</a>,
                        <a className="a_shooter" href="https://www.ubisoft.com/en-gb/" target="_blank"> Ubisoft</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}