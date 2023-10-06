import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";

export const minNumber = 0;
export const maxNumber = 5;

function App() {


    const [number, setNumber] = useState(minNumber);

    const plusNumber = () => {
        // if (number < maxNumber) {
        //     setNumber(number + 1);
        // }
        setNumber(number + 1)
    }

    const resetNumber = () => {
        setNumber(minNumber)
    }

    return (
        <div className="App">
            <Counter
                number={number}
                plusNumber={plusNumber}
                resetNumber={resetNumber}
            />
        </div>
    );
}

export default App;
