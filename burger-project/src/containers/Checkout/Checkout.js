import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0,
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search)
        let ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            console.log(param)
            if (param[0] === 'price') {
                price = param[1]
            } else {
                ingredients[param[0]] = +param[1]
            }
        }

        this.setState({
            ingredients: ingredients,
            price: price
        })

    }

    checkoutCanceledHandler = () => {
        console.log(this.props)
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCanceled={this.checkoutCanceledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <ContactData ingredients={this.state.ingredients} price={this.state.price} />
            </div>
        )
    }
}

export default Checkout;