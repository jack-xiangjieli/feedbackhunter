import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {

        return (
            <StripeCheckout
                name="FeedbackHunter"
                description="$5 for 5 email credits"
                amount={500}   // measured in cents
                token={token => this.props.handleToken(token)}        // callback func when the stripe returns a token
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add credits
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);