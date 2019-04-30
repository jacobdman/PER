import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  switch: {
    margin: '20px auto',
    height: '75px',
    width: '50%',
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
      <a className={classes.link} href="/">
        Introduction
      </a>
      <a className={classes.link} href="about">
        About Us
      </a>
      <a className={classes.link} href="events">
        Events
      </a>
      <a className={classes.link} href="contact">
        Contact
      </a>
    </div>
  );
};

Switch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Switch);
