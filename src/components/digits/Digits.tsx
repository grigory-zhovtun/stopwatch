import React from 'react';
import { hand } from '../watch/Watch';

type DigitsPropsType = {
    digit: number
    typeHand: hand
}

const Digits = ({digit, typeHand}:DigitsPropsType) => {

    let newDigit = '';
    if (digit < 10) {
        newDigit = "0" + digit;
    } else {
        newDigit = digit + '';
    }

    if (typeHand === 'millisecond' && digit < 100) {
        newDigit = "0" + digit;
    } 

    return (
        <div>
            {newDigit}
        </div>
    );
};

export default Digits;