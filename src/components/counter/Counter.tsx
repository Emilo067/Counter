import React, {FC} from 'react';
import Button from "../button/Button";
import S from "./Counter.module.css"
import {TabloCounter} from "./tablo/tabloCounter/TabloCounter";

type CounterPropsType = {
    number: number,
    plusNumber: () => void,
    resetNumber: () => void,
    setNumber: (n: number) => void
    resetMaxValueBtn: number
    startValue: number
    resetStartValueBtn: number
    showInputText: boolean
    error: boolean
}

export const Counter: FC<CounterPropsType> = (props) => {

    const
        {
            number,
            plusNumber,
            resetNumber,
            resetMaxValueBtn,
            resetStartValueBtn,
            showInputText,
            error
        } = props;

    return (

        <div className={S.counterWrapper}>

            <TabloCounter
                number={number}
                resetMaxValueBtn={resetMaxValueBtn}
                showInputText={showInputText}
                error={error}
            />

            <div className={S.ButtonWrapper}>

                <Button
                    disabled={number >= resetMaxValueBtn || showInputText}
                    className={number >= resetMaxValueBtn || showInputText ? `${S.ButtonDisabled}` : ``}
                    name={"inc"}
                    onCLick={plusNumber}
                />
                <Button
                    disabled={number === resetStartValueBtn || showInputText}
                    className={number === resetStartValueBtn || showInputText ? `${S.ButtonDisabled}` : ''}
                    name={"reset"}
                    onCLick={() => {
                        resetNumber()
                    }}
                />

            </div>

        </div>
    );
};

