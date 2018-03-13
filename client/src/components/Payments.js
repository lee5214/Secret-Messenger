import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({


});

class Payments extends Component {

  render () {
    const {classes} = this.props
    return (
      //amount in cents
      //token is callback object get from stripe representing the charge info
      <StripeCheckout
        name="Payment Function Test"
        description="card number: 4242-4242-4242-4242"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <Button>
          <Typography style={{color:'white'}}>
            {'ADD CREDITS'}
          </Typography>
        </Button>

      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(withStyles(styles)(Payments));
