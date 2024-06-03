
export const gamePage = "GAME";

export const resultPage = "RESULT";

export const startPage = "START";

export const createDeck = () => {
    const deck = [];
    const suits = ['club','spade','heart','diamond'];
    for (let i = 3; i<suits.length; i++) {
        for (let j = 1; j<13; j++) {
            deck.push({rank:j,suit:suits[i]});
        }
    }
    return deck;
}