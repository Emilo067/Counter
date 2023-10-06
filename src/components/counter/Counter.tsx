import React, {FC} from 'react';
import Button from "../button/Button";
import S from "./Counter.module.css"
import Tablo from "./tablo/Tablo";
import {maxNumber, minNumber} from "../../App";

type CounterPropsType = {
    number: number,
    plusNumber: () => void,
    resetNumber: () => void
}

export const Counter: FC<CounterPropsType> = (props) => {

    const {number, plusNumber, resetNumber} = props;



    return (
        <div className={S.counterWrapper}>

            <Tablo number={number}/>

            <div className={S.ButtonWrapper}>

                <Button
                    disabled={number >= maxNumber}
                    className={ number >= maxNumber ? `${S.Button} ${S.ButtonDisabled}` : `${S.Button}`}
                    name={"inc"}
                    onCLick={plusNumber}
                />
                <Button
                    disabled={number===minNumber}
                    className={number === minNumber ? `${S.Button} ${S.ButtonDisabled}` : `${S.Button}`}
                    name={"reset"}
                    onCLick={() => {resetNumber()}}
                />

            </div>

        </div>
    );
};

