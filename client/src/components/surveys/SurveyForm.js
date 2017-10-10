import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
//reduxForm is very similar as connect function
import _ from 'lodash';

import SurveyField from './InputField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class SurveyForm extends Component {
  renderFields () {
    return _.map(formFields, ({label, name}) => {
      return (<Field key={name}
                    component={SurveyField}
                    type='text'
                    label={label}
                    name={name}
              />);
    });
  }

  render () {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}

          <Button>
            <Link to='/surveys'>
              Cancel
            </Link>
          </Button>

          <Button type='submit'>
            Next
            <i className='material-icons'>done</i>
          </Button>
        </form>
        SurveyForm!
      </div>
    );
  }
}

function validate (values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({label, name}) => {
    //values.name => find the prop called name, it's not the same
    if (!values[name]) {
      errors[name] = `You must provide ${label}`;
    }

  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false //input won't be cleared when go review
})(SurveyForm);