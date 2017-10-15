//re-write using material-ui TextField
import React from 'react';
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import {withStyles} from 'material-ui/styles'
import PropTypes from 'prop-types';
const styles = theme => ({
    root: {
      width: '400px',
    },
    helperText: {
    }
})

const InputField = ({classes, label, input, meta: {error, touched}}) => {
  return (
    //{touched && error} => es6 syntax sugar, when true && string, it returns the string
    <Paper>
      <TextField
        {...input}
        label={label}
        helperText={touched && error}
        margin={'normal'}
        fullWidth
        className={classes.root}
        helperTextClassName={classes.helperText}
      />
    </Paper>
  );
}



export default withStyles(styles)(InputField)