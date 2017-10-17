import React from 'react';
import { createMuiTheme } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
const theme = createMuiTheme({
  "palette": {
    "type": "dark",
    "primary": {
      "50": "#e3f2fd",
      "100": "#bbdefb",
      "200": "#90caf9",
      "300": "#64b5f6",
      "400": "#42a5f5",
      "500": "#2196f3",
      "600": "#1e88e5",
      "700": "#1976d2",
      "800": "#1565c0",
      "900": "#0d47a1",
      "A100": "#82b1ff",
      "A200": "#448aff",
      "A400": "#2979ff",
      "A700": "#2962ff",
      "contrastDefaultColor": "dark"
    }
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