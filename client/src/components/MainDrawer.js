import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import SendIcon from 'material-ui-icons/Send';
import HomeIcon from 'material-ui-icons/Home';
import SaveIcon from 'material-ui-icons/Save';
import CreateIcon from 'material-ui-icons/Create';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';
import Link from 'react-router-dom/Link';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
    textDecoration: 'none'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  underlineRemoved: {
    textDecoration: 'none'
  }
});

class NestedList extends React.Component {
  state = { open: true };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const classes = this.props.classes;
    return (
      <List className={classes.root} subheader={<ListSubheader>Side Bar</ListSubheader>}>

        <Link className={classes.underlineRemoved} to='/' onClick={this.props.onLinkClick} >
          <ListItem button >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText inset primary="Home" >
            </ListItemText>
          </ListItem>
        </Link>
        <Link className={classes.underlineRemoved} to='/surveys/new/' onClick={this.props.onLinkClick} >
          <ListItem button >
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText inset primary="New" >
            </ListItemText>
          </ListItem>
        </Link>
        <Link className={classes.underlineRemoved} to='/surveys' onClick={this.props.onLinkClick} >
          <ListItem button >
            <ListItemIcon>
              <SaveIcon />
            </ListItemIcon>
            <ListItemText inset primary="Sent" >
            </ListItemText>
          </ListItem>
        </Link>

        {/*<ListItem button onClick={this.handleClick}>*/}
          {/*<ListItemIcon>*/}
            {/*<InboxIcon />*/}
          {/*</ListItemIcon>*/}
          {/*<ListItemText inset primary="Inbox" />*/}
          {/*{this.state.open ? <ExpandLess /> : <ExpandMore />}*/}
        {/*</ListItem>*/}

        {/*<Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>*/}
          {/*<ListItem button className={classes.nested}>*/}
            {/*<ListItemIcon>*/}
              {/*<StarBorder />*/}
            {/*</ListItemIcon>*/}
            {/*<ListItemText inset primary="Starred" />*/}
          {/*</ListItem>*/}
        {/*</Collapse>*/}

        <Link className={classes.underlineRemoved} to='/' onClick={this.props.onLinkClick} >
          <ListItem button >
            <ListItemIcon>
              <PersonPinIcon />
            </ListItemIcon>
            <ListItemText inset primary="About" >
            </ListItemText>
          </ListItem>
        </Link>

        <Link className={classes.underlineRemoved} to='/surveys/test/'  onClick={this.props.onLinkClick} >
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText inset primary="Test Component" />
          </ListItem>
        </Link>

      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);