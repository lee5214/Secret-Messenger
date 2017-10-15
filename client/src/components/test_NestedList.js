import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import SendIcon from 'material-ui-icons/Send';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';
import Link from 'react-router-dom/Link';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
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

        <Link to='/' onClick={this.props.onLinkClick} >
          <ListItem button >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText inset primary="Home" >
            </ListItemText>
          </ListItem>
        </Link>
        <Link to='/surveys' onClick={this.props.onLinkClick} >
          <ListItem button >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText inset primary="Sent" >
            </ListItemText>
          </ListItem>
        </Link>
        <Link to='/surveys/new/' onClick={this.props.onLinkClick} >
          <ListItem button >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText inset primary="New" >
            </ListItemText>
          </ListItem>
        </Link>

        <Link to='/surveys/test/' onClick={this.props.onLinkClick} >
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText inset primary="Test Component" />
        </ListItem>
        </Link>

        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText inset primary="Inbox" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText inset primary="Starred" />
          </ListItem>
        </Collapse>

        <Link to='/' onClick={this.props.onLinkClick} >
          <ListItem button >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText inset primary="About" >
            </ListItemText>
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