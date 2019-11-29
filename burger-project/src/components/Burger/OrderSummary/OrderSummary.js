import React, { Fragment } from 'react';
import Button from '../../UI/Button/Button.js'
class orderSummary extends React.Component {

    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
            .map((igKey) => {
                return <li key={igKey}><span style={{ textTransform: "capitalize" }}>{igKey} : {this.props.ingredients[igKey]}</span></li>
            })
        return (
            <Fragment>
                <h3>Your Order</h3>
                <p>A super burger with the following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout ?</p>
                <Button btnType="Success" clicked={this.props.purchaseCanceled}>Cancel</Button>
                <Button btnType="Danger" clicked={this.props.purchaseContinued}>Continue</Button>
            </Fragment >
        )
    }


}

export default orderSummary;