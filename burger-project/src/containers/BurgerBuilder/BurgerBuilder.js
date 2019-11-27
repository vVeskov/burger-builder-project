import React, { Fragment } from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from '../../../src/axios-order'

const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends React.Component {
    state = {
        ingredients: null,
        totalPrice: 3,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: false

    }

    componentDidMount() {
        console.log(this.props)
        axios.get('https://react-burger-builder-2e795.firebaseio.com/ingredients.json').then(response => {
            this.setState({
                ingredients: response.data
            })
        }).catch(error => {
            this.setState({ error: true })
        })
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true,
        })
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    purchaseContinueHandler = () => {
        // this.setState({
        //     loading: true,
        // })
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: "Valentin",
        //         address: {
        //             street: "Test street 1",
        //             zipCode: "1000",
        //             Country: "Bulgaria",
        //             City: "Sofia"
        //         },
        //         email: "test@test.com",
        //         deliveryMetho: "fastest"
        //     }
        // }
        // axios.post('/orders.json', order).then(response => {
        //     this.setState({
        //         loading: false,
        //         purchasing: false,
        //     })
        // }).catch(error => {
        //     this.setState({
        //         loading: false,
        //         purchasing: false,

        //     })
        // })
        this.props.history.push('/checkout')
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            }).reduce((newSum, el) => {
                return newSum + el
            }, 0)
        this.setState({
            purchaseable: sum > 0
        })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount;
        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const newCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount;
        const priceDeduction = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);

    }

    render() {

        const disabledInfo = { ...this.state.ingredients };
        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;

        if (this.state.loading) {
            orderSummary = <Spinner />
        }
        let burger = this.state.error ? <p>Ingredients can`t be loaded!</p> : <Spinner />

        if (this.state.ingredients) {
            burger = (
                <Fragment>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemove={this.removeIngredientHandler}
                        ordered={this.purchaseHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        purchaseable={this.state.purchaseable}
                    ></BuildControls>
                </Fragment>)
            orderSummary = <OrderSummary
                price={this.state.totalPrice}
                ingredients={this.state.ingredients}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}></OrderSummary>
        }

        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Fragment>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Fragment>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios); 