import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import InputField from './InputField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import CheckIcon from 'material-ui-icons/Check';
import ClearIcon from 'material-ui-icons/Clear';

class SurveyForm extends Component {
  renderFields () {
    return _.map(formFields, ({label, name}) => {
      return (
        <Grid item sm={12}>
          <Field key={name}
                 component={InputField}
                 type='text'
                 label={label}
                 name={name}
          />
        </Grid>
      );
    });
  }

  render () {
    return (
      <div>
        <Grid container justify={'center'} align={'center'}>
          <Grid item sm={6}>

            <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
              <Grid container justify={'center'} align={'center'}>
                <Grid item>
                  {this.renderFields()}
                </Grid>
              </Grid>

              <br/>
              <Grid container justify={'center'} align={'center'}>
                <Grid item>
                  <Button>
                    <Link to='/surveys' style={{textDecoration: 'none'}}>
                      Cancel
                    </Link>
                    <ClearIcon/>
                  </Button>
                </Grid>
                <Grid item>
                  <Button type='submit'>
                    Next
                    <CheckIcon/>
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
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