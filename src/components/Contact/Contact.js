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
  contacts: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '25px',
  },
});

const Contact = ({ classes }) => {
  return (
    <div className={classes.paper}>
      <div className={classes.content}>
        <h1>Contact US:</h1>
        <h2>Prosperity Education Route</h2>
        <div className={classes.divider} />
        <div className={classes.contacts}>
          <div className={classes.contactInfo}>
            <p>
              <h3>Jessica W. Dayton</h3>
              Phone: 954.716.0566
              <br />
              WeChat: jessicadayton28
              <br />
              Web: www.prosperityeducationroute.com
              <br />
              Email: Jessica@prosperityeducationroute.com
            </p>
          </div>
        </div>
        <p className={classes.copyright}>© 2018 Prosperity Education Route.</p>
      </div>
    </div>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
