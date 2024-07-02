// @ts-ignore
import React, { useEffect, useRef, useState } from 'react';
import { createDeck, resultPage } from '../utils/constants';

type GameProps = {
    setFinalScore: React.Dispatch<React.SetStateAction<[number, number]>>;
    changePage: React.Dispatch<React.SetStateAction<string>>;
    name: string;
};

const Game: React.FC<GameProps> = ({ setFinalScore, changePage, name }) => {
    const [compCard, setCompCard] = useState<string>("computer card");
    const [playerCard, setPlayerCard] = useState<string>('player card');
    const compDeck = useRef<{ rank: number; suit: string }[]>([]);
    const playerDeck = useRef<{ rank: number; suit: string }[]>([]);
    const currentScore = useRef<[number, number]>([0, 0]);

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
            if (player && comp) {
                if (player.rank < comp.rank) {
                    currentScore.current[0]++;
                }
                if (player.rank > comp.rank) {
                    currentScore.current[1]++;
                }
                setCompCard(`${comp.rank} ${comp.suit}`);
                setPlayerCard(`${player.rank} ${player.suit}`);
            }
        } else {
            if (currentScore.current[0] > currentScore.current[1]) {
                setFinalScore(prev => [prev[0] + 1, prev[1]]);
            } else if (currentScore.current[1] > currentScore.current[0]) {
                setFinalScore(prev => [prev[0], prev[1] + 1]);
            }

            changePage(resultPage);
        }
    };

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
