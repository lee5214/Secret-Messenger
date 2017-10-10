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
    maxWidth: 400,
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
        <Grid item>
          <Card className={classes.card} key={survey._id}>
            <CardContent>
              <Typography type="body1" className={classes.title}>

              </Typography>
              <Typography type="headline" component="h2">
                {survey.title}

              </Typography>
              <Typography component="p">
                {survey.body}
              </Typography>
              <p className={classes.pos}>
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
            </CardContent>
            <div className={classes.pos}>
              <a>Yes: {survey.yes}</a>
              <a>No: {survey.no}</a>
            </div>
          </Card>
        </Grid>
      );
    });
  }

  render () {
    const {classes} = this.props;
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