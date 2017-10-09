import React, { Component } from 'react';
import { connect } from 'react-redux';
//link used for single page redirect
import { Link } from 'react-router-dom';
import Payments from './Payments';

import { withStyles, } from 'material-ui/styles';

import ToolbarTitle from 'material-ui/Toolbar';
import Toolbar from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { CircularProgress } from 'material-ui/Progress';
import NestedList from './test_NestedList';

const styles = theme => ({
  flex: {
    flex: 1,
  },
  white: {
    color: 'white',
  },

});

class Header extends Component {
  //array for mutiple elements output!

  state = {
    open: false,
  };

  renderContent () {
    const {classes} = this.props;
    switch (this.props.auth) {
      case null:
        return (<CircularProgress color="accent"/>);
      case false:
        return (<li><a href="/auth/google">Login With Google</a></li>);
      default:
        return (
          [
            <Payments key='pay'/>,
            <ToolbarTitle key='credits'>
              Credits:
              <div>
                ${this.props.auth.credits}</div>
            </ToolbarTitle>,
            <ToolbarTitle key={'log'}>
              <a href="/api/logout" className={classes.white}>Log Out</a>
            </ToolbarTitle>,
          ]
        );
    }
  }

  handleDrawerToggle = () => this.setState({open: !this.state.open});

  handleDrawerClose = () => this.setState({open: false});

  render () {
    const {classes} = this.props;
    //console.log(this.props)
    return (
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton
            color="contrast"
            aria-label="open drawer"
            onClick={this.handleDrawerToggle}

          >
            <MenuIcon/>
          </IconButton>

          <Link className={classes.flex}
                to={this.props.auth ? '/surveys' : '/'}>
            <Typography type="title" className={classes.white}>
              Email System
            </Typography>
          </Link>

          <Toolbar>
            {this.renderContent()}
          </Toolbar>
        </Toolbar>

        <Drawer
          type="temporary"
          open={this.state.open}
          onRequestClose={this.handleDrawerToggle}
        >
          <NestedList/>
        </Drawer>
      </AppBar>

    )
      ;
  }
}

function mapStateToProps (state) {
  return {auth: state.auth};
}

//const connectC = //const css = withStyles(styles)(Header)
export default connect(mapStateToProps)(withStyles(styles)(Header));