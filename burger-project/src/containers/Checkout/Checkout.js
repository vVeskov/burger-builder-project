import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from '../Checkout/ContactData/ContactData';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Checkout extends Component {

    // componentWillMount() {
    //     this.props.onInitPurchase()
    // }

    state = {
        isClicked: false
    }

    // componentWillMount() {
    //     const query = new URLSearchParams(this.props.location.search)
    //     let ingredients = {};
    //     let price = 0;
    //     for (let param of query.entries()) {
    //         if (param[0] === 'price') {
    //             price = param[1]
    //         } else {
    //             ingredients[param[0]] = +param[1]
    //         }
    //     }

    //     this.setState({
    //         ingredients: ingredients,
    //         price: price
    //     })
    // }

    checkoutCanceledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.setState({
            isClicked: true
        })
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        let summary = <Redirect to='/' />
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to='/' /> : null
            summary = (
                <div>
                    {purchasedRedirect}
                    {
                        !this.state.isClicked ?
                            <Fragment>
                                <CheckoutSummary
                                    ingredients={this.props.ings}
                                    checkoutCanceled={this.checkoutCanceledHandler}
                                    checkoutContinued={this.checkoutContinuedHandler} />
                                <ContactData ingredients={this.state.ingredients} price={this.props.price} />
                            </Fragment> : <ContactData ingredients={this.state.ingredients} price={this.props.price} />
                    }
                </div>
            )
        }
        return (
            summary
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        purchased: state.order.purchased,
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onInitPurchase: () => dispatch(actions.purchaseInit()),
//     }
// }

export default connect(mapStateToProps)(Checkout);