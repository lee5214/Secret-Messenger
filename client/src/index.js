//data layer control (redux)
//when import none js file, need add extension like .css
//use none relative path like './', webpack will think you are importing a npm module

//import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
//use for test sendgrid function, send POST in terminal
/*
then in console:
const survey = {title: 'fake',subject:'subject', recipients:'congli5214@gmail.com',body:'bodddddddddy'};
axios.post('/api/surveys',survey)
*/

//create store at top level
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//then hook up with Provider
//when store gets new data, Provider inform all children components
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));

console.log('key: ', process.env.REACT_APP_STRIPE_KEY);
console.log('env: ', process.env.NODE_ENV);
