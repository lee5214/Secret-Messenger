//rendering layer conrol (react router)
import React, { Component } from 'react';
//BrowserRouter is the brain of routers, decide which route how to behaive
//Route set up rules for certain routes
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Header from './Header';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import Test from './Test';

const styles = {
  main: {paddingTop: '64px'},
};

class App extends Component {
  componentDidMount () {
    this.props.fetchUser();
  }

  render () {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            /**/
            <Header/>
            <div style={styles.main}>
              <Route exact={true} path="/" component={LandingPage}/>
              <Route exact path="/surveys" component={Dashboard}/>
              <Route path="/surveys/new" component={SurveyNew}/>
              <Route path="/surveys/test" component={Test}/>
            </div>
          </div>
        </BrowserRouter>
      </div>

    );
  }
}

export default connect(null, actions)(App);
