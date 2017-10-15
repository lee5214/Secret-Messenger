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
        name="Time for your payment"
        description="$5 NOW!"
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