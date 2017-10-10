import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'

import * as actions from '../../actions'
import SurveyForm from './SurveyForm';
import formFIELDS from './formFields';

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {
  const reviewFields = _.map(formFIELDS, ({label, name}) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });
  return (
    <div>
      Please review page


      {reviewFields}
      <div>
        {SurveyForm}
      </div>
      <button
        onClick={onCancel}>
        Back
      </button>
      <button
        onClick = { () => submitSurvey(formValues, history)}
      >
        Send Survey
        <i>email</i>
      </button>
    </div>
  );
};

let mapStateToProps = (state) => {
  //console.log(state);
  return {formValues: state.form.surveyForm.values};
};

export default connect(mapStateToProps,actions)(withRouter(SurveyFormReview));