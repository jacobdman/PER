import React, { useState, useEffect } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from './components/Header/Header';
import Switch from './components/Switch/Switch';
import Logo from './assets/PER_Logo_v2.png';

const width = window.innerWidth;
let componentHeight;

export const updateHeight = num => {
  componentHeight = num;
  console.log(num);
};

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
  verticalDivider: {
    height: 15,
    width: 0,
    border: 'white 1px solid',
    margin: 'auto 10px',
  },
  copyright: {
    position: 'relative',
    bottom: -90,
    marginLeft: '40%',
    fontSize: 14,
  },
  root: {
    minHeight: 900,
    width: '99vw',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
    background: 'rgb(47, 49, 117)',
  },
  paper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
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

const StudioTheme = ({ children }) => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(componentHeight);
  }, [componentHeight]);

  return (
    <div style={{ position: 'relative' }}>
      <MuiThemeProvider theme={theme}>
        <Header />
        <Switch />
        <div
          style={{
            width: '22%',
            height: width / 3,
            marginTop: 60,
            position: 'absolute',
            right: 0,
            backgroundImage: `radial-gradient(circle at 0 100%, transparent 0%, transparent ${width /
              3}px, rgb(47, 49, 117) ${width / 3 + 1}px)`,
          }}
        />
        <div
          style={{
            width: '35%',
            height: width / 3,
            marginTop: 60,
            position: 'absolute',
            right: 0,
            backgroundImage: `radial-gradient(circle at 0 100%, transparent 0%, transparent ${width /
              3}px, rgba(47, 49, 117, 0.7) ${width / 3 + 1}px)`,
          }}
        />
        <div
          style={{
            width: '55%',
            height: width / 1.8,
            marginTop: 60,
            position: 'absolute',
            right: 0,
            backgroundImage: `radial-gradient(circle at 0 100%, transparent 0%, transparent ${width /
              1.8}px, rgba(47, 49, 117, 0.4) ${width / 1.8 + 1}px)`,
          }}
        />
        {children}
        <div
          style={{
            width: '22%',
            height: width / 3,
            position: 'absolute',
            bottom: 0,
            backgroundImage: `radial-gradient(circle at 100% 0, transparent 0%, transparent ${width /
              3}px, rgb(47, 49, 117) ${width / 3 + 1}px)`,
          }}
        />
        <div
          style={{
            width: '35%',
            height: width / 3,
            position: 'absolute',
            bottom: 0,
            backgroundImage: `radial-gradient(circle at 100% 0, transparent 0%, transparent ${width /
              3}px, rgba(47, 49, 117, 0.7) ${width / 3 + 1}px)`,
          }}
        />
        <div
          style={{
            width: '55%',
            height: width / 1.8,
            position: 'absolute',
            bottom: 0,
            backgroundImage: `radial-gradient(circle at 100% 0, transparent 0%, transparent ${width /
              1.8}px, rgba(47, 49, 117, 0.4) ${width / 1.8 + 1}px)`,
          }}
        />
        <div
          style={{
            width: '100%',
            height: 100,
            background: 'rgb(47, 49, 117)',
            position: 'absolute',
            bottom: -100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 30px',
          }}
        >
          <img
            style={{ height: '90%', marginBottom: 30 }}
            src={Logo}
            alt="Logo"
          />
          <div style={{ color: 'white', fontSize: 30 }}>
            <span style={{ fontWeight: 800 }}>PROSPERITY</span>
            EDUCATIONROUTE.com
          </div>
        </div>
      </MuiThemeProvider>
    </div>
  );
};

export default StudioTheme;
