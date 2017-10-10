import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  surveyGrid: {
    flex: 1,
    justify: 'center',

  },
  button: {
    margin: theme.spacing.unit * 3,
    position: 'fixed',
    top: 'auto',
    left: 'auto',
    right: 20,
    bottom: 20,

  },
});

const Dashboard = (props) => {
  const {classes} = props;
  return (
    <Grid container justify='center' className={classes.root}>

      <Grid item xs={12}>
        <Paper>Dashboard</Paper>
      </Grid>

      <Grid item xs={12}>
        <SurveyList/>
      </Grid>

      <Link to='/surveys/new/'>
        <Button fab color="primary"
                aria-label="add"
                className={classes.button}
        >
          <AddIcon/>
        </Button>
      </Link>

    </Grid>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
