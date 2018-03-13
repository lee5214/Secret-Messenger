import React from 'react';
import Grid, { GridListTile } from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import List, { ListItem, ListItemText, ListSubheader } from 'material-ui/List';
import Typography from 'material-ui/Typography';

const styles = theme => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
	},
	chip: {
		margin: theme.spacing.unit,
	},
});

const Landing = () => {
	return (
		<Grid container justify={'center'}>
			<Grid item xs={12} md={6}>
				<Typography
					type={'headline'}
				>
					Hello,
				</Typography>
				<List>
					<ListItem>
						<ListItemText
							primary="this is a small project I created for used for sending anonymous email."/>
					</ListItem>
					<ListItem>
						<ListItemText
							secondary="It's free and anonymous, able to send emails to multiple receipts through my masked email system without showing your information.
							And a callback API is provided so that the receipts are able to answer the question which will be recorded in your log"/>
					</ListItem>
					<ListItem>
						<ListSubheader>Frontend</ListSubheader>
						<Chip label=" React"
						      className={styles.chip}/>
						<Chip label=" Redux"
						      className={styles.chip}/>
					</ListItem>
					<ListItem>
						<ListSubheader>Backend</ListSubheader>
						<Chip label=" Node"
						      className={styles.chip}/>
						<Chip label=" Express"
						      className={styles.chip}/>
					</ListItem>
					<ListItem>
						<ListSubheader>Design</ListSubheader>
						<Chip label=" Material-UI"
						      className={styles.chip}/>
					</ListItem>
					<ListItem>
						<ListItemText
							secondary="*Payment function is in test mode, please use 4242-4242-4242-4242 card num for credits"/>
					</ListItem>

				</List>
			</Grid>
		</Grid>

	);
};

export default Landing;
