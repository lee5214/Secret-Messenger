import React, { Component } from 'react';
import { fetchSurveys } from '../../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card from 'material-ui/Card'
import SurveyListCard from './SurveyListCard'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    minWidth: 200,
    maxWidth: 400,
    flex: 1,
    align: 'center',
    margin: 40,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

class SurveyList extends Component {
  componentDidMount () {
    this.props.fetchSurveys();
  }

  renderSurveys () {
    return this.props.surveys.reverse().map(survey => {
      const {classes} = this.props;
      return (
       <SurveyListCard survey={survey} />
      );
    });
  }

  render () {
    const {classes} = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container align={'center'}>
              {this.renderSurveys()}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps (state) {
  return {surveys: state.surveys};
};
SurveyList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {fetchSurveys})(
  withStyles(styles)(SurveyList));