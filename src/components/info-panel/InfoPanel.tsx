import React from 'react'

import './InfoPanel.css'

type InfoPanelPropsType = {
    count: number
    time: string
}

const InfoPanel = (props: InfoPanelPropsType) => {
  return (
    <div className='panel'>
        <h4>{props.count}   -</h4>
        <h4>{props.time}</h4>
    </div>
  )
}

export default InfoPanel