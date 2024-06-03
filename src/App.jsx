import './App.css'
import {useState} from "react";
import Game from "./components/Game.jsx";
import {gamePage, resultPage, startPage} from "./utils/constants.js";
import Start from "./components/Start.jsx";
import Result from "./components/Result.jsx";


function App() {
    const [page, setPage] = useState(startPage);
    const [name, setName] = useState("YOU");
    const [finalScore,setFinalScore] = useState([0,0]);


    const changeName = (name) => {
        if (name) {
            setName(name);
        }
    }

    switch (page) {
        case gamePage:
            return <Game changePage={setPage}  setFinalScore={setFinalScore}   name={name}/>
        case resultPage:
            return <Result changePage={setPage} finalScore={finalScore}  name={name}/>
        default:
            return <Start changePage={setPage} changeName={changeName}/>
    }
}

export default App
