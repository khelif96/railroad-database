import React, { Component } from 'react';
import {Route,Browser} from 'react-router-dom'
import Reservation from './scenes/Reservation.js'
import Schedule from './scenes/Schedule.js'
import Stations from './scenes/Stations.js'
import Home from './scenes/Home.js'
import Trains from './scenes/Trains.js'
import MyAccount from './scenes/MyAccount.js'
import Login from './scenes/Login.js'


class Routes extends Component {

    render() {
        return (
            <div>
                <Route exact path = '/' component = {Home}/>
                <Route path = '/Reservation' component = {Reservation}/>
                <Route path = '/Schedule' component = {Schedule}/>
                <Route path = '/Stations' component = {Stations} />
                <Route path = '/Trains' component = {Trains} />
                <Route path = '/MyAccount' component = {MyAccount} />
                <Route path = '/Login' component = { (routeProps) => <Login {...routeProps} testCall = {this.props.isSignedIn} isTheUserSignedIn={this.props.userIsSignedIn} /> }
 />
            </div>
        );
    }
}

export default Routes;
