import React,{Component} from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {connect} from 'react-redux'
import * as actions from '../actions'

class Payments extends Component {
  render(){
    //debugger;
    return(
      //amount in cents
      //token is callback object get from stripe representing the charge info
      <StripeCheckout
        name="Time for your payment"
        description="$5 NOW!"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn waves-effect waves-light">ADD CREDITS
        </button>

      </StripeCheckout>
    )
  }
}

export default connect(null,actions)(Payments);