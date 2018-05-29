import React, { Component } from 'react';
import {Input,Container} from '../styles/Reservation.style';
import {Grid,Paper, Button} from 'material-ui';
import AvailableTrains from '../components/AvailableTrains.js'

import {getStations,getTrains,calculateReservation} from '../utils/reservation';
import baseUrl from '../utils/baseUrl';
class Reservation extends Component {

    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            origin: '',
            destination: '',
            date: '2018-05-29',   //probably in JAVA date format NO TIME
            time : '',
            expandTrainSchedule : false,
            stations : [],
            trains : [],
            totalFare : 0

        };
        this.getTrains = getTrains.bind(this);
        this.getStations = getStations.bind(this);
        this.calculateReservation = calculateReservation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        var day = new Date(this.state.date);
        day = day.getDay();
        this.getTrains(this.state.origin,this.state.destination,day)
        .then(trains => {
          // alert(JSON.stringify(trains.data.trains))
          this.setState({
              trains: trains.data.trains,
              expandTrainSchedule : !this.state.expandTrainSchedule,
          })
        })
        .catch(error => {
          alert(error);
        })
        this.calculateReservation(this.state.origin,this.state.destination)
        .then(price => {
          // alert(JSON.stringify(price.data.totalFare))
          this.setState({
            totalFare : price.data.totalFare
          })
        })
        .catch(error => {
          alert(error);
        })


    }

    componentDidMount(){
        this.getStations()
        .then( stations => {
            let stationChoices = stations.data.map( (station) => {
                return (
                <option key={station.station_name}  value={station.station_id}>
                  {station.station_name}
                </option>)
            })
            this.setState({stations : stationChoices})
        })
        .catch(error => {
          alert(error)
        })
    }


    render() {
        /* Grid container acts as a whole row, and the item are its enteries */
        return (
            <Container>
                <Grid container justify="center" alignItems="center" spacing={16} style={{paddingBottom : '50px'}}>
                    <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                        <Grid container justify="center" alignItems="center" spacing={16} style={{paddingBottom : '50px'}}>
                                <Grid item xs>
                                    <Input
                                      select
                                        required
                                        id="origin"
                                        label="From"
                                        value={this.state.origin}
                                        onChange={this.handleChange('origin')}
                                    >
                                    {this.state.stations}
                                  </Input>
                                </Grid>
                                <Grid item xs>
                                    <Input
                                        required
                                        select
                                        id="destination"
                                        label="To"
                                        value={this.state.destination}
                                        onChange={this.handleChange('destination')}
                                    >
                                    {this.state.stations}
                                  </Input>
                                </Grid>
                        </Grid>
                        <Grid container justify="center" alignItems="center" spacing={16} style={{paddingBottom : '50px'}}>
                                <Grid item xs>
                                    <Input
                                        id="date"
                                        label="Date"
                                        type="date"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        value={this.state.date}
                                        onChange={this.handleChange('date')}
                                    />
                                </Grid>
                                <Grid item xs>
                                    <Input
                                        id="time"
                                        label="Time Of Departure"
                                        type="time"
                                        defaultValue="07:30"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            step: 600, // 5 min
                                        }}
                                        value={this.state.time}
                                        onChange={this.handleChange('time')}
                                    />
                                </Grid>

                        </Grid>
                        <Grid container justify="center" alignItems="center" spacing={16} style={{paddingBottom : '50px'}}>
                            <Button type="submit" variant="raised" style={{color : 'white', backgroundColor : '#F44235'}}>Submit</Button>
                        </Grid>
                    </form>
                    <Grid container justify="center" alignItems="center" spacing={16}>
                        <Grid item xs>
                            <AvailableTrains
                                expand={this.state.expandTrainSchedule}
                                trains={this.state.trains}
                                totalFare={this.state.totalFare}
                                start={this.state.origin} 
                                end={this.state.destination}
                                date={this.state.date}/>

                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}


export default Reservation;
