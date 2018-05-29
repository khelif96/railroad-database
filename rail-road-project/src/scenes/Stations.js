import React, { Component } from 'react';
import StationCard from '../components/StationCard.js';
import {baseUrl} from '../utils/baseUrl';
import Grid from '@material-ui/core/Grid';
import {Container} from '../styles/StationCard.style'


class Stations extends Component {
    constructor(props){
        super(props);
        this.state = {
            stations : [],
        }
    }
    componentDidMount(){
        fetch(baseUrl + '/stations')
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
            <Container>
                <Grid justify="center" container spacing={16}>
                    {this.state.stations.map( (station) => (
                    <Grid key={station.key} item>
                        {station}
                    </Grid>
                    ))}
                </Grid>
            </Container>
        );
    }
}

export default Stations;
