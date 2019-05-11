import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = theme => ({
  switch: {
    margin: '20px auto',
    height: '75px',
    width: '90%',
    background: 'rgb(255, 255, 255, 0.5)',
    borderRadius: '20px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  link: {
    backgroundColor: 'rgb(47, 49, 117, 0.4)',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    fontSize: '16px',
    border: '2px solid rgb(230, 200, 110)',
    transition: '.5s',
    borderRadius: '7px',
    textDecoration: 'none',
    '&:hover': { cursor: 'pointer', backgroundColor: 'rgb(230, 200, 110)' },
    '&:focus': { outline: 'none' },
  },
});

const Switch = ({ classes }) => {
  return (
    <div className={classes.switch}>
      <Link className={classes.link} to="/">
        Introduction
      </Link>
      <Link className={classes.link} to="/about">
        About Us
      </Link>
      <Link className={classes.link} to="/events">
        Events
      </Link>
      <Link className={classes.link} to="/contact">
        Contact
      </Link>
      <Link className={classes.link} to="/pdf/the_12_patterns">
        The 12 Patterns
      </Link>
      <Link className={classes.link} to="/pdf/leadership_camp">
        Leadership Camp
      </Link>
      <Link className={classes.link} to="/pdf/debate_camp">
        Debate Camp
      </Link>
    </div>
  );
};

Switch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Switch);
