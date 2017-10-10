import React, { Component } from 'react';
import { connect } from 'react-redux';
//link used for single page redirect
import { Link } from 'react-router-dom';
import Payments from './Payments';

import { withStyles, } from 'material-ui/styles';
import classNames from 'classnames';
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

  root: {
    backgroundColor: theme.palette.common.black,
  },
  flex: {
    flex: 1,
  },
  whiteText: {
    color: theme.palette.common.white,
  },
  link: {
    flex: 1,
    color: theme.palette.common.white,
    textDecoration: 'none',
  },

});

class Header extends Component {
  //array for mutiple elements output!

  constructor (props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  handleDrawerClose () {
    this.setState({open: false});
  }

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
              <Typography className={classes.whiteText}>
                Credits: ${this.props.auth.credits}
              </Typography>
            </ToolbarTitle>,
            <ToolbarTitle key={'log'}>
              <a href="/api/logout" className={classes.link}>
                <Typography className={classes.whiteText}>
                  Log Out
                </Typography>
              </a>
            </ToolbarTitle>,
          ]
        );
    }
  }

  handleDrawerToggle = () => this.setState({open: !this.state.open});

  render () {
    const {classes} = this.props;
    //console.log(this.props)
    return (
      <AppBar position='fixed' className={classNames(classes.root)}>
        <Toolbar>
          <IconButton
            color="contrast"
            aria-label="open drawer"
            onClick={this.handleDrawerToggle}

          >
            <MenuIcon/>
          </IconButton>

          <Link className={classes.link}
                to={this.props.auth ? '/surveys' : '/'}>
            <Typography className={classes.whiteText} type="title" noWarp>
              {'E-Voter'}
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
          <NestedList onLinkClick={this.handleDrawerClose}/>
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