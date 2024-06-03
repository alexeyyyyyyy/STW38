import React, {useEffect, useRef, useState} from 'react';
import {createDeck, resultPage} from "../utils/constants.js";

const Game = ({ setFinalScore, changePage, name }) => {
    const [compCard, setCompCard] = useState("computer card");
    const [playerCard, setPlayerCard] = useState('player card');
    const compDeck = useRef([]);
    const playerDeck = useRef([]);
    const currentScore = useRef([0, 0]);

    useEffect(() => {
        const deck = createDeck();
        deck.sort(() => Math.random() - 0.5);
        compDeck.current = deck.slice(0, deck.length / 2);
        playerDeck.current = deck.slice(deck.length / 2);
        currentScore.current = [0, 0];
    }, []);

    const handleClickNext = () => {
        if (compDeck.current.length) {
            const player = playerDeck.current.pop();
            const comp = compDeck.current.pop();
            if (player.rank < comp.rank) {
                currentScore.current[0]++;
            }
            if (player.rank > comp.rank) {
                currentScore.current[1]++;
            }
            setCompCard(`${comp.rank} ${comp.suit}`);
            setPlayerCard(`${player.rank} ${player.suit}`);
        } else {
            if (currentScore.current[0] > currentScore.current[1]) {
                setFinalScore(prev => [prev[0] + 1, prev[1]]);
            } else if (currentScore.current[1] > currentScore.current[0]) {
                setFinalScore(prev => [prev[0], prev[1] + 1]);
            }

            changePage(resultPage);
        }
    }

    return (
        <div>
            <h2>Comp</h2>
            <p>{compCard}</p>
            <p>{currentScore.current[0]}:{currentScore.current[1]}</p>
            <p>{playerCard}</p>
            <h2>{name}</h2>
            <button onClick={handleClickNext}>Next</button>
        </div>
    );
};

export default Game;