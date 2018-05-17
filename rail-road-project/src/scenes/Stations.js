import React, { Component } from 'react';
import StationCard from '../components/StationCard.js';

class Stations extends Component {
    constructor(props){
        super(props);
        this.state = {
            stations : [],
        }
    }
    componentDidMount(){
        fetch('http://localhost:3001/api/stations')
        .then( result => { 
            return result.json()
        }).then( data => {
            let stations = data.map( (station) => {
                return ( <StationCard StationName={station.station_name} key={station.station_id} StationSymbol={station.station_symbol}/>)
            })
            this.setState({stations : stations})
        })
    }
    render() {
        return (
            <div>
                {this.state.stations}
            </div>
        );
    }
}

export default Stations;