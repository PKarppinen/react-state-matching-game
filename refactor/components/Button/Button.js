import React from 'react';
import './Button.css';
import GameContext from '../../GameContext.js';

const Button = (props) => (
    <GameContext.Consumer>
        {
            ({playing, startGame}) => <button onClick={startGame}>
                {playing ? 'reset' : 'start'}
            </button>                        
        }   
    </GameContext.Consumer>
    
)

export default Button
