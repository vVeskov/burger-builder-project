import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
import { checkPropTypes } from 'prop-types'

const NavigationItems = (props) => {
    return (
        <ul className='NavigationItems'>
            <NavigationItem link="/">Burger Builder</NavigationItem>
            <NavigationItem link="/orders" >Orders</NavigationItem>
            {!props.isAuthenticated
                ? <NavigationItem link="/auth">Authenticate</NavigationItem>
                : <NavigationItem link="logout">Logout</NavigationItem>}
        </ul>
    )
}

export default NavigationItems