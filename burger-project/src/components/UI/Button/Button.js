import React from 'react'
import './Button.css'

const button = (props) => {
    let attachedClass = ['Button', `${props.btnType}`].join(' ');
    return (
        <button className={attachedClass} onClick={props.clicked}>{props.children}</button>
        // <button className='Success' onClick={props.clicked}>{props.children}</button>
    )
}

export default button;