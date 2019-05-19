import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.root,
  },
  divider: {
    ...theme.divider,
  },
  copyright: {
    ...theme.copyright,
  },
  paper: {
    ...theme.paper,
  },
  content: {
    ...theme.content,
  },
  event: {
    fontSize: 25,
    margin: '20px 0px',
  },
});

const Home = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        <div className={classes.content}>
          <h1>PER’s Upcoming International Educational Events:</h1>
          <div className={classes.divider} />
          <p className={classes.event}>
            <h2>November 2018:</h2>
            Chengdu—Successful families and global education (3 days of
            seminars)
            <br />
            Shanghai—Successful families and global education (2-day event)
            <br />
            Shenzhen—8 Habits and global education (Family/training center
            seminar)
            <br />
            Guangzhou—8 Habits and global education (Private event)
          </p>
          <p className={classes.event}>
            <h2>January 2019:</h2>
            Salk Lake City Utah—American English/8 Habits Winter Camp
          </p>
          <p className={classes.event}>
            <h2>February 2019:</h2>
            Dubai UAE—Successful families and global education (Private Event)
            <br />
            Salt Lake City Utah —American English/8 Habits Winter Camp
          </p>
          <p className={classes.copyright}>
            © 2018 Prosperity Education Route.
          </p>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
