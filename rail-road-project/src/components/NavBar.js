import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import classNames from 'classnames';

const styles = {
  root: {
    flexGrow: 1,
  },
  navItem: {
    flex: 1,
    textAlign: 'center',
    textDecoration: 'none',
    color: 'white',
    fontSize: '18px',
  },
  logo: {
    marginLeft: -12,
    marginRight: 30,
    textDecoration: 'none',
    color: 'white',
    fontSize: '30px',
  },


};

class NavBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };


  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>

            {localStorage.getItem("API_KEY") ?
              (<Link to='/' className={classes.logo}>
                <Button  className={classes.logo}>
                  MRR
                </Button>
              </Link>) :
              (<Link to='/Login' className={classes.logo}>
                <Button  className={classes.logo}>
                  MRR
                </Button>
              </Link>) }

            <Link to='/Reservation' className={classes.navItem}>
              <Button  className={classes.navItem}>
                Make a Reservation
              </Button>
            </Link>

           <Link to='/Schedule' className={classes.navItem}>
              <Button  className={classes.navItem}>
                Schedule
              </Button>
            </Link>

            <Link to='/Stations' className={classes.navItem}>
              <Button  className={classes.navItem}>
                Stations
              </Button>
            </Link>

            <Link to='/Trains' className={classes.navItem}>
              <Button  className={classes.navItem}>
                Trains
              </Button>
            </Link>

            {localStorage.getItem("API_KEY") ?
              (<Link to='/MyAccount' className={classes.navItem}>
              <Button  className={classes.navItem}>
                My Account
              </Button>
              </Link>) :
              (<Link to='/Login' className={classes.navItem}>
                <Button  className={classes.navItem}>
                  Login
                </Button>
              </Link>) }

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar)
