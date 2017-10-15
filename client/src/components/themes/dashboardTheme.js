import React from 'react';
import { createMuiTheme } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
const theme = createMuiTheme({
  "palette": {
    "type": "dark",
  },
  "typography": {
    "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    "letterSpacing": "-.04em",
    "lineHeight": "1.14286em",
    "marginLeft": "-.06em",
    "color": "rgba(255, 255, 255, 1)",
  }
});
export default theme;