import React from 'react';
import { hand } from '../watch/Watch';

type DigitsPropsType = {
    digit: number
    typeHand: hand
}

const Digits = ({digit, typeHand}:DigitsPropsType) => {

    

    return (
        <div>
            {digit < 10 ? "0" + digit: digit}
        </div>
    );
};

export default Digits;