import React, {createContext, useState, useEffect} from 'react';
import {gameGet} from './../constants';

export const GameInfoContext = createContext();

const GameInfoContextProvider = ({children}) => {

    const game_salug = window.location.pathname.split('/')[2];
    const [doneFetchGame, setDoneFetchGame] = useState(false);
    const [game, setGame] = useState([]);

    useEffect(() => getGame(game_salug), [game_salug]);

    const getGame = getGame => {
        fetch(gameGet(game_salug))
            .then(res => res.json())
            .then(data => {
                setGame(data);
                setDoneFetchGame(true);
            })
            .catch(err => console.log(err));
    }

    return (
        <GameInfoContext.Provider value= {{doneFetchGame, game}}>
            {children}
        </GameInfoContext.Provider>
    )
}


export default GameInfoContextProvider;