import React, { useEffect, useState } from 'react';
import Digits from "../digits/Digits";

import './Watch.css'

export type hand = 'millisecond' | 'microsecond' | 'second' | 'minute';

type WatchPropsType = {
    clickedButton: string
    clearButton: () => void
    onSaveHandler: (time: string) => void
}

const Watch = (props: WatchPropsType) => {
    const [millisecond, setMillisecond] = useState(0)
    const [microsecond, setMicrosecond] = useState(0)
    const [second, setSecond] = useState(0)
    const [minute, setMinute] = useState(0)
    let [newTime, setNewTime] = useState('')

    const timerGo = () => {
        const timoutID = setTimeout(() => {
            setMillisecond(millisecond + 1);
        }, 1);

        return () => {
            clearTimeout(timoutID);
        };
    }

    useEffect(() => {

        if (props.clickedButton === 'reset') {
            setMillisecond(0)
            setMicrosecond(0)
            setSecond(0)
            setMinute(0)
        }

        if (props.clickedButton === 'pause') {
            setMillisecond(millisecond)
            setMicrosecond(microsecond)
            setSecond(second)
            setMinute(minute)
        }

        if (props.clickedButton === 'save') {
            const newMinute = minute < 10 ? '0' + minute + ":" : minute + ":"
            const newSecond = second < 10 ? '0' + second + ":" : second + ":"
            const newMicrosecond = microsecond < 10 ? '0' + microsecond + ":" : microsecond + ":"
            const newMillisecond = millisecond < 10 ? '0' + millisecond : millisecond
            newTime = newMinute + newSecond + newMicrosecond + newMillisecond
            props.onSaveHandler(newTime)
        }

        if (props.clickedButton === 'start' || props.clickedButton === 'save') {
            timerGo()
        }

    }, [props.clickedButton, millisecond])

    useEffect(() => {
        if (millisecond % 100 === 0 && millisecond > 0) {
            setMicrosecond(microsecond + 1)
        }
    }, [millisecond])

    if (second === 60) {
        setMinute(minute + 1)
        setSecond(0)
    }

    if (microsecond === 10) {
        setMicrosecond(0)
    }

    if (millisecond === 1001) {
        setSecond(second + 1)
        setMillisecond(0)
    }

    return (
        <div className='wrapper'>
            <Digits digit={minute} typeHand='minute' />
            <Digits digit={second} typeHand='second' />
            <Digits digit={microsecond} typeHand='microsecond' />
            <Digits digit={millisecond} typeHand='millisecond' />
        </div>
    );
};

export default Watch;