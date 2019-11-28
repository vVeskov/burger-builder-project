import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, [])
    })
    let hasIngr = false;
    transformedIngredients.forEach((ingr) => {
        if (ingr.length !== 0) {
            hasIngr = true;
        }
    })
    if (!hasIngr) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (

        <div className="Burger">
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )
}

export default burger;