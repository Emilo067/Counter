import React, {FC} from 'react';
import S from './Button.module.css'

type ButtonPropsType = {
    name: string,
    onCLick: () => void,
    className?: string,
    disabled?: boolean
}

const Button: FC<ButtonPropsType> = (props) => {

    const {name, onCLick, className, disabled} = props;


    return (
        <button
            disabled={disabled}
            className={`${S.Button} ${className}`}
            onClick={onCLick}
        >
            {name}
        </button>
    );
};

export default Button;