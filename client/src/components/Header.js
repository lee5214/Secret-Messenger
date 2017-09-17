import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  //array for mutiple elements output!
  renderContent () {
    switch (this.props.auth) {
      case null:
        return (<li>Loading</li>);
      case false:
        return (<li><a href="/auth/google">Login With Google</a></li>);
      default:
        return (
          [
            <li key='stripe_payment'><Payments/></li>,
            <li key='header-credits'>Credits: {this.props.auth.credits}</li>,
            <li key='logout'><a href="/api/logout">Log Out</a></li>,
          ]
        );
    }
  }

  render () {
    //console.log(this.props)
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps (state) {
  return {auth: state.auth};
}

export default connect(mapStateToProps)(Header);