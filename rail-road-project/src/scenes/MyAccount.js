import React, { Component } from 'react';
import {Container,Account,AccountHeader} from '../styles/MyAccount.style';
import {Grid,Paper, Button, Typography} from 'material-ui';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import {getPassengerInfo} from '../utils/auth';
import {getReservationsByPassengerId,getTrains} from '../utils/reservation'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'
import ReservationRow from '../components/ReservationRow'

class MyAccount extends Component {

    constructor(props){
        super(props);
        this.state = {
            fname : "",
            lname : "",
            email : "",
            preferred_card_number : "",
            preferred_billing_address : "",
            reservations : [],
            reservation : null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getTrains = getTrains.bind(this);
        this.getReservationsByPassengerId = getReservationsByPassengerId.bind(this);
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

    logOutUser = (event) => {
         event.preventDefault();
         localStorage.removeItem('API_KEY')
         this.props.history.push('/Login')
    }

    createReservationRow(TRAINID, TRIPDATE, START, END, ARRIVALTIME, DEPARTURETIME, FARE, RESERVATIONDATE, TRIPID){
        return (<ReservationRow
        TrainID={TRAINID}
        TripDate={TRIPDATE}
        From={START}
        To={END}
        FromTime={ARRIVALTIME}
        ToTime={DEPARTURETIME}
        Price={FARE}
        ReservationDate={RESERVATIONDATE}
        TripID={TRIPID}/>)
    }

    componentDidMount(){
        const API_KEY = localStorage.getItem('API_KEY')

        getPassengerInfo(API_KEY)
        .then( (userData => {
            this.setState({
                fname : userData[0].fname,
                lname : userData[0].lname,
                email : userData[0].email,
            });
        }))



        getReservationsByPassengerId(API_KEY)
        .then( (userData) => {
            for(var reservations = 0; reservations < userData.data.length; reservations ++){

                const START = userData.data[reservations].trip_start;
                const END = userData.data[reservations].trip_end;
                const TRAINID = userData.data[reservations].train_id;
                const TRIPDATE = userData.data[reservations].trip_date;
                let parseDay = new Date(userData.data[reservations].trip_date);
                const DAY = parseDay.getDay();
                console.log("TRIP " + DAY);
                const FARE = userData.data[reservations].fare;
                const RESERVATIONDATE = userData.data[reservations].reservation_date;
                const TRIPID = userData.data[reservations].trip_id


                getTrains(START, END, DAY)
                .then( (train) => {
                    for(var i =0; i < train.data.trains.length; i++ ){
                        if(train.data.trains[i].TrainID === TRAINID){
                            const ARRIVALTIME = train.data.trains[i].Arrival;
                            const DEPARTURETIME = train.data.trains[i].Departure;

                            let reservationRow = this.createReservationRow(TRAINID, TRIPDATE, START, END, ARRIVALTIME, DEPARTURETIME, FARE, RESERVATIONDATE, TRIPID)
                            let array = this.state.reservations
                            array.push(reservationRow)

                            this.setState({
                                reservations : array,
                            })
                        }
                    }
                })
                .catch(error => {
                  alert("Error while trying to getTrains")
                })



            }
        })
    }

    render() {
        return (
            <Container>
                <Grid justify="center" container  spacing={40 } style={{padding : '50px'}}>
                    <Grid item xs>
                        <Account>
                            <AccountHeader title={ this.state.fname+ " " + this.state.lname}/>
                            <CardContent>

                                <Typography gutterBottom variant="headline" component="h4">
                                    Email : {this.state.email}
                                </Typography>
                                <br/>

                                <Typography gutterBottom variant="headline" component="h4">
                                    Reservations
                                </Typography>
                                <div style={{overflowX : "scroll"}}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                        <TableCell>Train ID</TableCell>
                                        <TableCell>Trip Date</TableCell>
                                        <TableCell>From</TableCell>
                                        <TableCell>To</TableCell>
                                        <TableCell>Departure Time</TableCell>
                                        <TableCell>Arrival Time</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>Reservation Date</TableCell>
                                        <TableCell>Trip ID</TableCell>
                                        </TableRow>

                                </TableHead>
                                <TableBody>
                                    {this.state.reservations}
                                </TableBody>
                                </Table>
                                </div>
                            </CardContent>
                            <CardActions>
                                <Button onClick={this.logOutUser} color="primary" >
                                        Log Out
                                </Button>
                            </CardActions>
                        </Account>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}


export default MyAccount;
