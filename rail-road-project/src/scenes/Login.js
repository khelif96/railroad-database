import React, { Component } from 'react';
import {Input,Container} from '../styles/Reservation.style';
import {Grid,Paper, Button, Typography} from 'material-ui';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import RegisterDialog from '../components/RegisterDialog';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            openRegister : false,
            fname : "test first name",
            lname : "test last name",
            email : "test email",
            password : "test password",
            preferred_card_number : "test card number",
            preferred_billing_address : "test preferred billing address",
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
    
    /*componentDidMount(){
        fetch('http://localhost:3001/api/stations')
        .then( result => { 
            return result.json()
        }).then( data => {
            this.setState({
                fname : data.fname,
                lname : data.lname,
                email : data.email,
                password : data.password,
                preferred_card_number : data.preferred_card_number,
                preferred_billing_address : data.preferred_billing_address,
            })
        })
        
    }*/

    render() {
        return (
            <Container>
                <Grid container justify="center" alignItems="center" spacing={16} style={{paddingBottom : '50px'}}>
                    <Grid container justify="center" alignItems="center" spacing={16}> 
                        <Grid item xs>
                            <Card>
                                <CardContent> 
                                    <RegisterDialog
                                        open={this.state.openRegister}
                                        onClose={ (event) => {this.setState({openRegister : false})}}
                                        aria-labelledby="form-dialog-title"
                                    />
                                </CardContent>

                            </Card>
                              
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}


export default Login;
