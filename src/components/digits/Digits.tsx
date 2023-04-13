import React from 'react';
import { hand } from '../watch/Watch';

import './Digits.css';

type DigitsPropsType = {
    digit: number
    typeHand: hand
}

const Digits = ({digit, typeHand}:DigitsPropsType) => {

    let styleDigit = '';
    switch (typeHand) {
        case 'minute':
            styleDigit = 'minute';
            break;
        case 'second':
            styleDigit = 'second';
            break;
        case 'microsecond':
            styleDigit = 'microsecond';
            break;
        default:
            styleDigit = 'millisecond';
    }

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
        <div className={`${styleDigit} digit`}>
            {newDigit}
        </div>
    );
};

export default Digits;