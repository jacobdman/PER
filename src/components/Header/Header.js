import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Logo from '../../assets/images/PER_Logo.png';

const styles = theme => ({
  root: {
    height: '300px',
    padding: '5px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-around',
    background: 'white',
    border: '5px solid rgb(230, 200, 110)',
    marginTop: '20px',
  },
  logo: {
    height: '100%',
    width: 'auto',
  },
});

const Header = ({ classes }) => {
  return (
    <div className={classes.root}>
      <img className={classes.logo} src={Logo} alt="Logo" />
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
