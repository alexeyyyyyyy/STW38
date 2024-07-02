import './App.css';
import { useState } from 'react';
import Game from './components/Game';
import { gamePage, resultPage, startPage } from './utils/constants';
import Start from './components/Start';
import Result from './components/Result';

function App() {
    const [page, setPage] = useState<string>(startPage);
    const [name, setName] = useState<string>("YOU");
    const [finalScore, setFinalScore] = useState<[number, number]>([0, 0]);

    const changeName = (name: string):void => {
        if (name) {
            setName(name);
        }
    };

    switch (page) {
        case gamePage:
            return <Game changePage={setPage} setFinalScore={setFinalScore} name={name} />;
        case resultPage:
            return <Result changePage={setPage} finalScore={finalScore}  />;
        default:
            return <Start changePage={setPage} changeName={changeName} />;
    }
}

export default App;
