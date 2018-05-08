import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Routes from './Routes.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import NavBar from './components/NavBar.js'


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff7960',
      main: '#f44335',
      dark: '#b9000b',
    },
    secondary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
    },
  },
});
class App extends Component {
  render() {
    return (
    <Router>
      <MuiThemeProvider theme={theme}>
          <NavBar/>
          <Routes/>
      </MuiThemeProvider>
    </Router>
    );
  }
}

export default App;
