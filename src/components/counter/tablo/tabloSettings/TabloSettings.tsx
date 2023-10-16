import React, {ChangeEvent, FC} from 'react';
import S from "./TabloSettings.module.css";
import {maxValue} from "../../../../App";

type TabloSettingsPropsType = {
    startValue: number,
    setStartValue: (n: number) => void
    maxNumber: number
    setMaxNumber: (n: number) => void
    setDisableBtn: (disableBtn: boolean) => void
    setShowInputText: (showInputText: boolean) => void
    setError: (error: boolean) => void
    error: boolean
}
export const TabloSettings: FC<TabloSettingsPropsType> = (props) => {

    const
        {
            startValue,
            setStartValue,
            maxNumber,
            setMaxNumber,
            setDisableBtn,
            setShowInputText,
            setError,
        } = props

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
        if (+e.currentTarget.value < 0 || +e.currentTarget.value >= maxValue) {
            setError(true)
            setDisableBtn(true)
        } else {
            setError(false)
            setDisableBtn(false)
            setShowInputText(true)
        }

    }

    const onChangeMaxNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxNumber(+e.currentTarget.value)
        if (+e.currentTarget.value <= startValue) {
            setError(true)
            setDisableBtn(true)
        } else {
            setError(false)
            setDisableBtn(false)
            setShowInputText(true)
        }

    }

    return (
        <div className={S.numberWrapper}>

            <div className={"InputWrapper"}>
                <label htmlFor={"maxValue"}>max value:</label>
                <input value={maxNumber} type="number" id={"maxValue"} onChange={onChangeMaxNumberHandler}/>
            </div>

            <div className={"InputWrapper"}>
                <label htmlFor={"startValue"}>start value:</label>
                <input value={startValue} type="number" id={"startValue"} onChange={onChangeStartValueHandler}/>
            </div>

        </div>
    );
};