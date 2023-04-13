import React from 'react'

import './Button.css'

type ButtonPropsType = {
    nameButton: string
    callback: () => void
}

const Button = (props: ButtonPropsType) => {
    return (
        <div 
            className='Button'
            onClick={props.callback}>
            {props.nameButton}
        </div>
    )
}

export default Button