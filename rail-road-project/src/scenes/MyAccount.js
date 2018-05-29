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
            const START = userData.data[0].trip_start;
            const END = userData.data[0].trip_end;
            const TRAINID = userData.data[0].train_id;
            const TRIPDATE = new Date(userData.data[0].trip_date);
            const DAY = TRIPDATE.getDay() - 1 ;
            const FARE = userData.data[0].fare;
            const RESERVATIONDATE = userData.data[0].reservation_date;
            const TRIPID = userData.data[0].trip_id


            getTrains(START, END, DAY)
            .then( (train) => {
                for(var i =0; i < train.data.trains.length; i++ ){
                    if(train.data.trains[i].TrainID === TRAINID){
                        const ARRIVALTIME = train.data.trains[i].Arrival;
                        const DEPARTURETIME = train.data.trains[i].Departure;
                        console.log(START);
                        console.log(END);
                        console.log(TRAINID);
                        console.log(TRIPDATE);
                        console.log(FARE);
                        console.log(RESERVATIONDATE);
                        console.log(TRIPID);
                        console.log(ARRIVALTIME);
                        console.log(DEPARTURETIME);
                        let reservationRow = this.createReservationRow(TRAINID, TRIPDATE, START, END, ARRIVALTIME, DEPARTURETIME, FARE, RESERVATIONDATE, TRIPID)
                        let array =  this.state.reservations.push(reservationRow)

                        console.log(reservationRow)
                        
                        this.setState({
                            reservations : array,
                        })
                    }
                }
            })
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
