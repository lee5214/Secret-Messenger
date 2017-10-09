import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    minWidth: 200,
    maxWidth: 400,
    flex: 1,
    align: 'center',
    justify: 'space-around'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

function SimpleCard(props) {
  const { survey,classes } = props;
  const bull = <span className={classes.bullet}>•</span>;
  return (
      <Card className={classes.card} key={survey._id}>
        <CardContent>
          <Typography type="body1" className={classes.title}>

          </Typography>
          <Typography type="headline" component="h2">
            {survey.title}

          </Typography>
          <Typography component="p">
            {survey.body}
          </Typography>
          <p className={classes.pos}>
            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
          </p>
        </CardContent>
        <div className={classes.pos}>
          <a>Yes: {survey.yes}</a>
          <a>No: {survey.no}</a>
        </div>
      </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);