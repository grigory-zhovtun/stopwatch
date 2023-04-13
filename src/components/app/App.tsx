import React, { useState } from 'react';
import Watch from "../watch/Watch";
import Button from '../button/Button';

import './App.css'
import InfoPanel from '../info-panel/InfoPanel';

type SavedTime = {
    count: number;
    time: string;
}

const App = () => {

    let [clickedButton, setClickedButton] = useState('')
    const [savedTime, setSavedTime] = useState<SavedTime[]>([])

    const onStart = () => { setClickedButton("start") }
    const onSave = () => {  setClickedButton("save")  }
    const onPause = () => { setClickedButton("pause") }
    const onReset = () => { setClickedButton("reset") }

    const clearButton = () => {
        setClickedButton('')
    }

    const onSaveHandler = (newTime: string) => {
        setSavedTime([...savedTime, {count: savedTime.length+1, time: newTime}])
        setClickedButton("start")
    }

    const infoPanelComponents = savedTime.map(item => {
        return (
            <InfoPanel count={item.count} time={item.time} />
        )
    })

    return (
        <div>
            <Watch clickedButton={clickedButton} clearButton={clearButton} onSaveHandler={onSaveHandler}/>
            <div className='buttonsWrapper'>
                <Button nameButton={"Start"} callback={onStart} />
                <Button nameButton={"Save"} callback={onSave}/>
                <Button nameButton={"Pause"} callback={onPause}/>
                <Button nameButton={"Reset"} callback={onReset}/>
            </div>
            {infoPanelComponents}
        </div>
    );
};

export default App;