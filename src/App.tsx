import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {SettingsCounter} from "./components/settingsCounter/SettingsCounter";

export let minValue = 0;
export let maxValue = 5;

function App() {

    const [disableBtn, setDisableBtn] = useState(true)
    const [number, setNumber] = useState(minValue);
    const [startValue, setStartValue] = useState(minValue);
    const [maxNumber, setMaxNumber] = useState(maxValue);
    const [resetStartValueBtn, setResetStartValueBtn] = useState(0)
    const [resetMaxValueBtn, setResetMaxValueBtn] = useState(5)
    const [showInputText, setShowInputText] = useState(false)
    const [error, setError] = useState(false)


    const plusNumber = () => {
        setNumber(number + 1)
    }

    const resetNumber = () => {
        setNumber(startValue)
    }

    return (
        <div className="App">

            <SettingsCounter
                setStartValue={setStartValue}
                maxNumber={maxNumber}
                setMaxNumber={setMaxNumber}
                startValue={startValue}
                setNumber={setNumber}
                disableBtn={disableBtn}
                setDisableBtn={setDisableBtn}
                resetBtn={resetStartValueBtn}
                setResetBtn={setResetStartValueBtn}
                setResetMaxValueBtn={setResetMaxValueBtn}
                setShowInputText={setShowInputText}
                setError={setError}
                error={error}
            />

            <Counter
                number={number}
                plusNumber={plusNumber}
                resetNumber={resetNumber}
                setNumber={setNumber}
                resetMaxValueBtn={resetMaxValueBtn}
                startValue={startValue}
                resetStartValueBtn={resetStartValueBtn}
                showInputText={showInputText}
                error={error}
            />

        </div>
    );
}

export default App;
