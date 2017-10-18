import React from 'react';
import Grid,{GridListTile} from 'material-ui/Grid';
import List, { ListItem, ListItemText, ListSubheader } from 'material-ui/List';
import Typography from 'material-ui/Typography'
const Landing = () => {
  return (
    <Grid container justify={'center'}>
      <Grid item>
        <Grid container justify={'center'}>
          <Grid item sm={12} >
            <Typography
              type={'headline'}
            >
              Hello, This is Cong
            </Typography>
          </Grid>
        </Grid>

        <Grid container justify={'center'}>
          <Grid item  sm={12} >
            <List>
              <ListItem>
                <ListItemText inset
                              primary="Welcome to my OPA, this is a fun project I created while learning MERN."/>
              </ListItem>
              <ListItem>
                <ListItemText inset primary="Backend == Nodejs && Express"/>
              </ListItem>
              <ListItem>
                <ListItemText inset
                              primary="Frontend == React && Redux && material-ui"/>
              </ListItem>
              <ListItem>
                <ListItemText inset
                              primary="Design spec == Google Material Design"/>
              </ListItem>

              <ListItem>
                <ListItemText inset
                              secondary="*Payment function is in test mode, please use 4242-4242-4242-4242 card num for credits"/>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Landing;