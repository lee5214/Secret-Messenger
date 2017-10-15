import React from 'react';
import Grid,{GridListTile} from 'material-ui/Grid';
import List, { ListItem, ListItemText, ListSubheader } from 'material-ui/List';
import Typography from 'material-ui/Typography'
const Landing = () => {
  return (
    <Grid container justify={'center'}>
      <Grid item  md={12}>
        <Grid container justify={'center'}>
          <Grid item  sm={10} md={6}>
            <Typography
              type={'headline'}
            >
              Hello, This is Cong
            </Typography>
          </Grid>
        </Grid>

        <Grid container justify={'center'}>
          <Grid item  sm={10} md={6}>
            <List>
              <ListItem>
                <ListItemText inset
                              primary="Welcome to my site, this is a fun project I created when learning React."/>
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
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Landing;