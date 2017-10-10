//re-write using material-ui TextField
import React from 'react';
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'

const style = {
  maxWidth: '200px',
}
export default ({label, input, meta: {error, touched}}) => {
  return (
    //{touched && error} => es6 syntax sugar, when true && string, it returns the string
    <Paper style={style}>
      <TextField
        {...input}
        label={label}
        helperText={touched && error}
        margin={'normal'}
        fullWidth
      />
    </Paper>
  );
}