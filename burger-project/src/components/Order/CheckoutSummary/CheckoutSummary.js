import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.css';

class CheckoutSummary extends React.Component {

    state = {
        isClicked: false,
    }

    render() {
        return (
            <div className="CheckoutSummary" >
                <h1>We hope it tastes weeeeel :)</h1>
                <div style={{ width: '100%', margin: 'auto' }}>
                    <Burger ingredients={this.props.ingredients} />
                </div>
                <div className="orderButtons">
                    <Button btnType='Danger' clicked={this.props.checkoutCanceled}>Cancel</Button>
                    <Button btnType='Success' className="SuccessBtn" clicked={this.props.checkoutContinued}>Continue</Button>
                </div>
            </div>
        )
    }
}

export default CheckoutSummary;