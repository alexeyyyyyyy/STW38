import React, {useState} from 'react';
import {gamePage} from "../utils/constants.js";

const Start = ({ changePage, changeName }) => {
    const [name, setName] = useState('');

    const handleClickStart = () => {
        changePage(gamePage);
        changeName(name);
    };

    return (
        <div className="start-outer-container">
            <div className="start-inner-container">
                <h1 className="start-title">Ready For War</h1>
                <input
                    className="start-input"
                    value={name}
                    onChange={e => setName(e.target.value.toUpperCase())}
                    type="text"
                    placeholder="Enter Your Name"
                />
                <button className="start-button" onClick={handleClickStart}>Start</button>
            </div>
        </div>
    );
};

export default Start;