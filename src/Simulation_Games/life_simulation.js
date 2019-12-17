import React from 'react';
import './Simulation_Games.css'

export default function Life_simulation() {
    return(
        <div className="life_simulation_div">
            <h2 className="life_simulation_red_text">Life simulation</h2>
            <br />
            <p className="life_simulation_description">The Sims is the most popular life simulation game and one of
            the best-selling video games of all time. Like SimCity (which was also created by Will Wright), in
            The Sims, players control the individual aspects of artificial life. Simulations may allow players
            to manipulate a character’s genetics or their ecosystem. Even the character’s reaction to a certain
            situation may be under the player’s control.
            Virtual pet games like Nintendogs and Tamagotchi are considered part of
            the subgenre of this category as pet-raising simulations. Thus, The Sims is
            considered a social simulation. Both types of subgenres fall into the life simulation category.
            Finally, because of the control these games give to players over the characters and
            their surroundings, life simulations are sometimes called “god games.”
            </p>
            <br />
            <div className="row">
                <div className="col life_simulation_col">
                    <h4>Notable games:</h4>
                    <h5>
                        <a className="a_life_simulation" href="https://www.ea.com/games/the-sims" target="_blank">Sims</a>,
                        <a className="a_life_simulation" href="https://www.vrchat.com/" target="_blank"> VRChat</a>,
                        <a className="a_life_simulation" href="https://secondlife.com/" target="_blank"> Second Life</a>,
                        <a className="a_life_simulation" href="https://www.stardewvalley.net/" target="_blank"> Stardew Valley</a>
                    </h5>
                </div>
                <div className="col life_simulation_col">
                    <h4>Notable developers:</h4>
                    <h5>
                        <a className="a_life_simulation" href="https://www.ea.com/studios/maxis" target="_blank"> Maxis</a>,
                        <a className="a_life_simulation" href="https://www.lindenlab.com/" target="_blank"> Linden Lab</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}