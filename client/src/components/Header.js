import React, { Component } from 'react';
import { connect } from 'react-redux';
//link used for single page redirect
import { Link } from 'react-router-dom';
import Payments from './Payments';

import { MuiThemeProvider, withStyles, } from 'material-ui/styles';
import ToolbarTitle from 'material-ui/Toolbar';
import Toolbar from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MenuIcon from 'material-ui-icons/Menu';
import { CircularProgress } from 'material-ui/Progress';
import MainDrawer from './MainDrawer';
import theme from './themes/headerTheme';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import ArrowForward from 'material-ui-icons/ArrowForward'
const styles = theme => ({
  flex: {
    flex: 1,
  },
  link: {
    flex: 1,
    textDecoration: 'none',
  },
});

class Header extends Component {
  //array for mutiple elements output!

  constructor (props) {
    super(props);
    this.state = {
      mainDrawerOpen: false,
      dotDrawerOpen: false,
    };
    this.handleMainDrawerClose = this.handleMainDrawerClose.bind(this);
  }

  handleMainDrawerClose () {
    this.setState({mainDrawerOpen: false});
  }

  renderDotMenuContent(){
    const {classes} = this.props;
    switch (this.props.auth) {
      case null:
        return (<CircularProgress color="accent"/>);
      case false:
        return (
          <ToolbarTitle key={'login'}>
            <a href="/auth/google" className={classes.link}>
              <Typography>
                Login With Google
              </Typography>
            </a>
          </ToolbarTitle>
        );

      default:
        return (
            <ToolbarTitle key={'logout'}>
              <a href="/api/logout" className={classes.link}>
                <Typography>
                  Log Out
                </Typography>
              </a>
            </ToolbarTitle>

        );
    }
  }
  renderContent () {
    const {classes} = this.props;
    switch (this.props.auth) {
      case null:
        return (<CircularProgress color='primary'/>);
      case false:
        return (
          <ToolbarTitle key={'login'}>
            <a href="/auth/google" className={classes.link}>
              <Typography>
                LOGIN
                <ArrowForward/>
              </Typography>
            </a>
          </ToolbarTitle>
        );

      default:
        return (
          [
            <Payments key='pay'/>,
            <ToolbarTitle key='credits'>
              <Typography>
                CREDITS: ${this.props.auth.credits}
              </Typography>
            </ToolbarTitle>,
          ]
        );
    }
  }

  handleMainDrawerToggle = () => this.setState({mainDrawerOpen: !this.state.mainDrawerOpen});

  handleDotMenuClick = event => {
    this.setState({ dotDrawerOpen: true, anchorEl: event.currentTarget });
  };

  handleDotMenuRequestClose = () => {
    this.setState({ dotDrawerOpen: false });
  };
  render () {
    const {classes} = this.props;
    //console.log(this.props)
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <div>
            <AppBar position='fixed' color={'primary'}>
              <Toolbar>
                <IconButton
                  color="contrast"
                  aria-label="open drawer"
                  onClick={this.handleMainDrawerToggle}

                >
                  <MenuIcon/>
                </IconButton>

                <Link className={classes.link}
                      to={this.props.auth ? '/surveys' : '/'}>
                  <Typography className={classes.whiteText} type="title">
                    {'E-Voter'}
                  </Typography>
                </Link>

                <Toolbar>
                  {this.renderContent()}
                </Toolbar>

                <Toolbar>
                  <div>
                    <IconButton
                      aria-label="More"
                      aria-owns={this.state.dotDrawerOpen ? 'long-menu' : null}
                      aria-haspopup="true"
                      onClick={this.handleDotMenuClick}
                      style={{color:'white'}}
                    >
                      <MoreVertIcon/>
                    </IconButton>

                    <Menu
                      id="long-menu"
                      anchorEl={this.state.anchorEl}
                      open={this.state.dotDrawerOpen}
                      onRequestClose={this.handleDotMenuRequestClose}
                      PaperProps={{
                        style: {
                          width: 200,
                          backgroundColor: theme.palette.grey[800],
                        },
                      }}
                    >

                        <MenuItem key={'1'} onClick={this.handleDotMenuRequestClose}>
                          {this.renderDotMenuContent()}
                        </MenuItem>

                    </Menu>
                  </div>
                </Toolbar>
              </Toolbar>
            </AppBar>

            <Drawer
              title={'main drawer'}
              type="temporary"
              open={this.state.mainDrawerOpen}
              onRequestClose={this.handleMainDrawerToggle}
            >
              <MainDrawer onLinkClick={this.handleMainDrawerClose}/>
            </Drawer>

          </div>
        </MuiThemeProvider>
      </div>

    )
      ;
  }
}

function mapStateToProps (state) {
  return {auth: state.auth};
}

//const connectC = //const css = withStyles(styles)(Header)
export default connect(mapStateToProps)(withStyles(styles)(Header));