import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Grid from 'material-ui/Grid';
import dashboardTheme from './themes/dashboardTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = theme => ({
  root: {},
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
    backgroundColor: dashboardTheme.palette.primary[500],
    color: 'white'

  },
});

const Dashboard = (props) => {
  const {classes} = props;
  return (
    <MuiThemeProvider theme={dashboardTheme}>
      <Grid container align={'center'} justify={'center'}
            className={classes.root}>

        <Grid item xs={12}>
          <SurveyList/>
        </Grid>

        <Link to='/surveys/new/'>
          <Button fab
                  aria-label="add"
                  className={classes.button}
          >
            <AddIcon/>
          </Button>
        </Link>

      </Grid>
    </MuiThemeProvider>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
