import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';
import SurveyForm from './SurveyForm';
import formFIELDS from './formFields';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import ArrowBack from 'material-ui-icons/ArrowBack';
import ArrowForward from 'material-ui-icons/ArrowForward';

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {

  const reviewFields = _.map(formFIELDS, ({label, name}) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
        <br/>
      </div>
    );
  });
  return (
    <div>
      <Grid container justify={'center'} alignItems={'center'}>
        <Grid item sm={8}>
          <Grid container justify={'center'} alignItems={'center'}>
            <Grid item>
              <h2>Please double check before sending the email</h2>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={8}>
          <Grid container justify={'center'} alignItems={'center'}>
            <Grid item>
              {reviewFields}
            </Grid>
          </Grid>
          <br/>
          <Grid container justify={'center'} alignItems={'center'}>
            <Grid item>
              {SurveyForm}
            </Grid>
          </Grid>

          <Grid container justify={'center'} alignItems={'center'}>
            <Grid item>
              <Button
                onClick={onCancel}>
                <ArrowBack/>
                Back

              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => submitSurvey(formValues, history)}
              >
                Send
                <ArrowForward/>
              </Button>
            </Grid>
            <Grid item>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

let mapStateToProps = (state) => {
  //console.log(state);
  return {formValues: state.form.surveyForm.values};
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));