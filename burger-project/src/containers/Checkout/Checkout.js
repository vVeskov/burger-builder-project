import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from '../Checkout/ContactData/ContactData';
import { connect } from 'react-redux'
class Checkout extends Component {
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
            summary = (
                <div>
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
        ings: state.ingredients,
        price: state.totalPrice,
    }
}

export default connect(mapStateToProps)(Checkout);