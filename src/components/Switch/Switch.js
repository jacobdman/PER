import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = theme => ({
  switch: {
    marginTop: 30,
    background: theme.palette.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
  },
  link: {
    color: 'white',
    fontSize: 20,
    textDecoration: 'none',
    '&:hover': { cursor: 'pointer', color: 'rgb(230, 200, 110)' },
    '&:focus': { outline: 'none' },
  },
  verticalDivider: {
    ...theme.verticalDivider,
  },
});

const Switch = ({ classes }) => {
  return (
    <div className={classes.switch}>
      <div />
      <div style={{ display: 'flex' }}>
        <Link className={classes.link} to="/">
          Introduction
        </Link>
        <div className={classes.verticalDivider} />
        <Link className={classes.link} to="/about">
          About Us
        </Link>
        <div className={classes.verticalDivider} />
        <Link className={classes.link} to="/events">
          Events
        </Link>
        <div className={classes.verticalDivider} />
        <Link className={classes.link} to="/contact">
          Contact
        </Link>
        <div className={classes.verticalDivider} />
        <Link className={classes.link} to="/pdf/the_12_patterns">
          The 12 Patterns
        </Link>
        <div className={classes.verticalDivider} />
        <Link className={classes.link} to="/pdf/leadership_camp">
          Leadership Camp
        </Link>
        <div className={classes.verticalDivider} />
        <Link className={classes.link} to="/pdf/debate_camp">
          Debate Camp
        </Link>
      </div>
    </div>
  );
};

Switch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Switch);
