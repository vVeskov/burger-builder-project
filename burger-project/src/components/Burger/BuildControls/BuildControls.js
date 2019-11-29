import React from 'react';
import BuildControl from './BuildControl/BuildControl'
import '../../Burger/BuildControls/BuildControls.css'

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
]

const buildControls = (props) => {
    console.log(props.price)
    return (
        <div className="BuildControls">
            <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
            {
                controls.map((ctrl) => (
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        added={() => props.ingredientAdded(ctrl.type)}
                        removed={() => props.ingredientRemove(ctrl.type)}
                        disabled={props.disabled[ctrl.type]} />
                ))
            }
            <button className="OrderButton"
                disabled={!props.purchaseable}
                onClick={props.ordered}>Order Now</button>
        </div>
    )

}

export default buildControls;