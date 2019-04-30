import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './routes/Router';
import PERTheme from './PERTheme';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
  routeWrapper: {
    marginTop: 65,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

function App({ classes }) {
  return (
    <div className={classes.root}>
      <PERTheme>
        <CssBaseline />
        <div className={classes.routeWrapper}>
          <Routes />
        </div>
      </PERTheme>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
