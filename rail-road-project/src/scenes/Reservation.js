import React, { Component } from 'react';
import {Input,Container} from '../styles/Reservation.style';
import {Grid,Paper, Button} from 'material-ui';
import AvailableTrains from '../components/AvailableTrains.js'

class Reservation extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            origin: '',
            destination: '',
            date: '',   //probably in JAVA date format NO TIME
            time : '',
            expandTrainSchedule : false,
            stations : []

        };

        this.handleSubmit = this.handleSubmit.bind(this);

    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            expandTrainSchedule : !this.state.expandTrainSchedule,
        })
    }

    componentDidMount(){
        fetch('http://localhost:3001/api/stations')
        .then( result => {
            return result.json()
        }).then( data => {
            let stations = data.map( (station) => {
                return ( <option key={station.station_name}  value={station.station_id}>
                  {station.station_name}
                </option>)
            })
            this.setState({stations : stations})
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
                                firstName={this.state.firstName}
                                lastName={this.state.lastName}
                                origin={this.state.origin}
                                destination={this.state.destination}
                                date={this.state.date}
                                time={this.state.time}/>

                        </Grid>
                    </Grid>

                </Grid>

            </Container>
        );
    }
}


export default Reservation;
