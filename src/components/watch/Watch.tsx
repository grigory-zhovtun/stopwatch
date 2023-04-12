import React, {useEffect, useState} from 'react';
import Digits from "../digits/Digits";

const Watch = () => {
    const [millisecond, setMillisecond] = useState(0)
    const [microsecond, setMicrosecond] = useState(0)
    const [second, setSecond] = useState(0)
    const [minute, setMinute] = useState(0)

    useEffect(() => {
        const timoutID = setTimeout(() => {
            setMillisecond(millisecond + 1)
        }, 1)

        return () => {
            clearTimeout(timoutID)
        }
    }, [millisecond])

    useEffect(() => {
        if (millisecond % 100 === 0) {
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

    if (millisecond === 1000) {
        setSecond(second + 1)
        setMillisecond(0)
    }
   
    return (
        <div>
            <Digits digit={minute}/>
            <Digits digit={second}/>
            <Digits digit={microsecond}/>
            <Digits digit={millisecond}/>
        </div>
    );
};

export default Watch;