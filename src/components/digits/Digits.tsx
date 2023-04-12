import React from 'react';

type DigitsPropsType = {
    digit: number
}

const Digits = ({digit}:DigitsPropsType) => {

    return (
        <div>
            {digit < 10 ? "0" + digit: digit}
        </div>
    );
};

export default Digits;