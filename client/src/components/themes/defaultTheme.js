import React from 'react';
import { createMuiTheme } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
const theme = createMuiTheme({
  palette: {
    type: 'light',

    primary: red,
    secondary: {
      ...green,
      A400: '#00e677',
    },

    error: red[500],
    common: {
      black: "#000",
      white: "#fff",
      transparent: "rgba(0, 0, 0, 0)",
      fullBlack: "rgba(0, 0, 0, 1)",
      darkBlack: "rgba(0, 0, 0, 0.87)",
      lightBlack: "rgba(0, 0, 0, 0.54)",
      minBlack: "rgba(0, 0, 0, 0.26)",
      faintBlack: "rgba(0, 0, 0, 0.12)",
      fullWhite: "rgba(255, 255, 255, 1)",
      darkWhite: "rgba(255, 255, 255, 0.87)",
      lightWhite: "rgba(255, 255, 255, 0.54)",
    },
  },

  overrides: {
    // MuiButton: {
    //   // Name of the styleSheet
    //   root: {
    //     // Name of the rule
    //     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    //     borderRadius: 3,
    //     border: 0,
    //     color: 'white',
    //     height: 48,
    //     padding: '0 30px',
    //     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
    //   },
    //
    // },
  },
});
export default theme;