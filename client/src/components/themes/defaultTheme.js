import React from 'react';
import { createMuiTheme } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
const theme = createMuiTheme({
  palette: {
    type: 'light',

    primary: red, // Purple and green play nicely together.
    secondary: {
      ...green,
      A400: '#00e677',
    },

    error: red,
  },

  overrides: {
    MuiButton: {
      // Name of the styleSheet
      root: {
        // Name of the rule
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
      },

    },
  },
});
export default theme;