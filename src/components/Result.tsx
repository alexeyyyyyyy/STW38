// @ts-ignore
import React from 'react';
import {gamePage} from "../utils/constants.js";

const Result = ({changePage, finalScore}) => {
    return (
        <div>
            <h1>LOSE/WIN</h1>
            <h2>{finalScore[0]}:{finalScore[1]}</h2>
            <button onClick={()=>changePage(gamePage)}>Again?</button>
        </div>
    );
};

export default Result;