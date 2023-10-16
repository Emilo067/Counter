import React, {FC} from 'react';
import Button from "../button/Button";
import S from "./SettingsCounter.module.css"
import {TabloSettings} from "../counter/tablo/tabloSettings/TabloSettings";

type SettingsPropsType = {
    setStartValue: (n: number) => void
    maxNumber: number
    setMaxNumber: (n: number) => void
    startValue: number
    setNumber: (n: number) => void
    disableBtn: boolean
    setDisableBtn: (disableBtn: boolean) => void
    resetBtn: number
    setResetBtn: (setBtn: number) => void
    setResetMaxValueBtn: (setMaxValueBtn: number) => void
    setShowInputText: (showInput: boolean) => void
    setError: (error: boolean) => void
    error: boolean
}

export const SettingsCounter: FC<SettingsPropsType> = (props) => {

    const
        {
            setStartValue,
            maxNumber,
            setMaxNumber,
            startValue,
            setNumber,
            setDisableBtn,
            disableBtn,
            setResetBtn,
            setResetMaxValueBtn,
            setShowInputText,
            setError,
            error
        } = props
    const setSettingNumber = () => {

        // if(startValue < 0) {
        //     setError(true);
        //     setDisableBtn(true)
        // }

        setNumber(startValue)

        setMaxNumber(maxNumber);

        setDisableBtn(true);

        setResetBtn(startValue);

        setResetMaxValueBtn(maxNumber);

        setShowInputText(false)
    }

    return (
        <div className={S.counterWrapper}>

            <TabloSettings
                startValue={startValue}
                setStartValue={setStartValue}
                maxNumber={maxNumber}
                setMaxNumber={setMaxNumber}
                setDisableBtn={setDisableBtn}
                setShowInputText={setShowInputText}
                setError={setError}
                error={error}
            />

            <div className={S.ButtonWrapper}>

                <Button
                    name={"Set"}
                    onCLick={setSettingNumber}
                    disabled={disableBtn}
                    className={disableBtn ? `${S.ButtonDisabled}` : ''}
                />


            </div>

        </div>
    );
};

