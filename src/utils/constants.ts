export const gamePage: string = "GAME";

export const resultPage: string = "RESULT";

export const startPage: string = "START";

export const createDeck = (): { rank: number; suit: string }[] => {
    const deck: { rank: number; suit: string }[] = [];
    const suits: string[] = ['club', 'spade', 'heart', 'diamond'];
    for (let i = 0; i < suits.length; i++) {
        for (let j = 1; j <= 13; j++) {
            deck.push({ rank: j, suit: suits[i] });
        }
    }
    return deck;
};
