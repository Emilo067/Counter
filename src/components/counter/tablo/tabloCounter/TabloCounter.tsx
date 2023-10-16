import React, {FC} from 'react';
import S from "./TabloCounter.module.css";

type TabloPropsType = {
    number: number
    resetMaxValueBtn: number
    showInputText: boolean
    error: boolean
}

export const TabloCounter: FC<TabloPropsType> = (props) => {

    const inputText = <span className={S.InputText}>Enter value and press 'Set'</span>
    const errorText = <span className={S.ErrorText}>invalid value</span>

    const {number, resetMaxValueBtn, showInputText, error} = props

    return (
        <div className={S.numberWrapper}>


            {error ? errorText : showInputText

                ? inputText :
                <h1
                    className={number < resetMaxValueBtn
                        ? `${S.numberTitle}`
                        : `${S.numberTitle} ${S.numberMoreFive}`}
                >
                    {number}
                </h1>
            }

        </div>
    );
};