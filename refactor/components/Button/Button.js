import React from 'react';
import './Button.css';
import GameContext from '../../GameContext.js';

const Button = (props) => (
    (playing, startGame) => { 
    return <GameContext.Consumer>
                <button onClick={startGame}>
                    {playing ? 'reset' : 'start'}
                </button>
            </GameContext.Consumer>;
    }
)

export default Button
