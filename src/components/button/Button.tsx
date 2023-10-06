import React, {FC} from 'react';

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
            className={className}
            onClick={onCLick}
        >
            {name}
        </button>
    );
};

export default Button;