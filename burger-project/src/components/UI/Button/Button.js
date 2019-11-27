import React from 'react'
import './Button.css'

const button = (props) => {
    return (
        <button className={["Button", [props.btnType]]} onClick={props.clicked}>{props.children}</button>
        // <button className='Success' onClick={props.clicked}>{props.children}</button>
    )
}

export default button;