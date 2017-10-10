//rendering layer conrol (react router)
import React, { Component } from 'react';
//BrowserRouter is the brain of routers, decide which route how to behaive
//Route set up rules for certain routes
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from './themes/defaultTheme';

import Test from './Test'
class App extends Component {
  componentDidMount () {
    this.props.fetchUser();
  }

  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="container">
          <BrowserRouter>
            <div>
              <Header/>
              <div style={{paddingTop: '64px'}}>
                <Route exact={true} path="/" component={Landing}/>
                <Route exact path="/surveys" component={Dashboard}/>
                <Route path="/surveys/new" component={SurveyNew}/>
                <Route path="/surveys/test" component={Test}/>
              </div>
            </div>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(null, actions)(App);
