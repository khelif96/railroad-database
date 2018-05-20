import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// react router
import Routes from './Routes.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// material UI styling
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import {AppContainer} from './styles/container.js'

// components
import NavBar from './components/NavBar.js'

// the universal style that is going to be applied throughout the app
const theme = createMuiTheme({
  palette: {
    primary: {                  // red shades
      light: '#ff7960',
      main: '#f44335',
      dark: '#b9000b',
    },
    secondary: {                // black and gray shades
      light: '#484848',
      main: '#212121',
      dark: '#000000',
    },
  },
});

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          loggedIn : true,
          api_key : "",
      };
  }
  render() {
    const { classes } = this.props;
    return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <NavBar loggedIn ={this.state.loggedIn}/>
        <AppContainer> <Routes/> </AppContainer>
      </MuiThemeProvider>
    </Router>
    );
  }
}

export default App;

