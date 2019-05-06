import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from './components/Header/Header';
import Switch from './components/Switch/Switch';

const theme = createMuiTheme({
  typography: {
    color: '#fff',
    useNextVariants: true,
  },
  palette: {
    type: 'light',
    background: {
      default: 'rgb(47, 49, 117)',
    },
    primary: {
      main: 'rgb(230, 200, 110)',
    },
    secondary: {
      main: '#5e0e29',
    },
  },
  zIndex: {
    appBar: 1100,
  },
  divider: {
    width: '90%',
    border: '1px solid rgba(92, 94, 143, 1)',
    margin: '45px auto',
  },
  copyright: {
    position: 'relative',
    bottom: -90,
    fontSize: 14,
  },
  root: {
    margin: 0,
    padding: 0,
    background: 'rgb(47, 49, 117)',
  },
  paper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
    marginBottom: '50px',
    background: 'white',
    borderRadius: '5px',
    padding: '25px',
  },
  content: {
    width: '100%',
    height: '100%',
    border: '5px solid rgb(230, 200, 110)',
    borderRadius: 10,
    padding: 50,
    boxSizing: 'border-box',
    fontSize: 18,
  },
  bottomImg: {
    position: 'absolute',
    bottom: '-120%',
    width: '100vw',
  },
});

class StudioTheme extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <Switch />
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default StudioTheme;
