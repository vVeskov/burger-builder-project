import React, { Fragment } from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import './SideDrawer.css'

const SideDrawer = (props) => {

    let attachedClasses = ['SideDrawer', 'Close']

    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open']
    }

    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <Logo height="12%"></Logo>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    )
}

export default SideDrawer;