import React, { Component } from 'react';
import {Input,Container} from '../styles/Reservation.style';
import {Grid,Paper, Button, Typography} from 'material-ui';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import {getPassengerInfo} from '../utils/auth';


class MyAccount extends Component {

    constructor(props){
        super(props);
        this.state = {
            fname : "",
            lname : "",
            email : "",
            preferred_card_number : "",
            preferred_billing_address : "",

        }
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

    logOutUser = (event) => {
         event.preventDefault();
         localStorage.removeItem('API_KEY')
         this.props.history.push('/')
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
        
    }

    render() {
        return (
            <Container>
                <Grid container justify="center" alignItems="center" spacing={16} style={{paddingBottom : '50px'}}>
                    <Grid container justify="center" alignItems="center" spacing={16}> 
                        <Grid item xs>
                            <Card>
                                <CardContent> 
                                    <Typography>{this.state.fname}</Typography> 
                                    <Typography>{this.state.lname}</Typography> 
                                    <Typography>{this.state.email}</Typography> 
                                </CardContent>

                                <Button onClick={this.logOutUser} color="primary">
                                        Log Out
                                </Button>
                            </Card>
                              
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}


export default MyAccount;
