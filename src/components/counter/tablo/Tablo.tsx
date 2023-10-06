import React, {FC} from 'react';
import S from "../Counter.module.css";

type TabloPropsType = {
    number: number
}

const Tablo: FC<TabloPropsType> = ({number}) => {
    return (
        <div className={S.numberWrapper}>

            <h1 className={number < 5 ? `${S.numberTitle}` : `${S.numberTitle} ${S.numberMoreFive}`}>{number}</h1>

        </div>
    );
};

export default Tablo;