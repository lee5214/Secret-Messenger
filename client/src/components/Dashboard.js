import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'fixed',
    marginRight: 0,
  },
});

const Dashboard = (props) => {
  const {classes} = props;
  return (
    <div>
      <Paper>Dashboard</Paper>
      <SurveyList/>
      <Link className={classes.button} to='/surveys/new/'>
        <Button fab color="primary"
                aria-label="add"
                >
          <AddIcon/>
        </Button>
      </Link>
    </div>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
