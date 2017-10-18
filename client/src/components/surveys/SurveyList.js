import React, { Component } from 'react';
import { fetchSurveys } from '../../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    minWidth: 300,
    flex: 1,
    align: 'center',

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
    display: 'flex',
    alignItems: 'center',
    justify:'center'
  },
  posSection: {
    width: '50%',
    flex: 1,
  }
});

class SurveyList extends Component {
  componentDidMount () {
    this.props.fetchSurveys();
  }

  renderSurveys () {
    return this.props.surveys.reverse().map(survey => {
      const {classes} = this.props;
      return (
        <Grid item key={survey._id}>
          <Card className={classes.card}>
            <CardContent>
              <Typography type="body1" className={classes.title}>

              </Typography>
              <Typography type="headline" component="h2">
                {survey.title}

              </Typography>
              <Typography>
                {survey.body}
              </Typography>
              <p className={classes.pos}>
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
            </CardContent>
            <div className={classes.pos}>
              <div className={classes.posSection}>Yes: {survey.yes}</div>
              <div className={classes.posSection}>No: {survey.no}</div>
            </div>
          </Card>
        </Grid>
      );
    });
  }

  render () {
    return (

          <Grid container justify={'center'} >
            {this.renderSurveys()}
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