import React, { Component } from 'react';
import {Input,Container} from '../styles/Reservation.style';
import {Grid,Paper, Button, Typography, Dialog, DialogContent, DialogContentText, DialogTitle} from 'material-ui';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import RegisterDialog from '../components/RegisterDialog';
import {loginPassenger} from '../utils/auth';
import TextField from '@material-ui/core/TextField';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : "",
            canLogin : false,
            error : false, 
        }
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
            canLogin : this.checkFields([
                this.state.email,
                this.state.password
            ])
        });
    };

    handleClose = () => {
        this.setState({ error: false });
    };
    

    loginUser = (event) => {
        const EMAIL = this.state.email;
        const PASSWORD = this.state.password;

        loginPassenger(EMAIL,PASSWORD)
        .then((api) => {
            const API_KEY = api.replace(/['"]+/g, '');
            localStorage.setItem('API_KEY',API_KEY)
            this.props.history.push('/MyAccount')
        })
        .catch((err) => {
            this.setState({error :true})
          });
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

    checkFields = (fields) => {
        const checkField = (field) => { return !(field == "") };
        return fields.every(checkField);
      }

    render() {
        return (
            <Container>
                <Grid container justify="center" alignItems="center" spacing={16} style={{paddingBottom : '50px'}}>
                    <Grid container justify="center" alignItems="center" spacing={16}> 
                        <Grid item xs>
                            <Card>
                                <CardContent> 
                                   <TextField
                                        required
                                        autoFocus
                                        margin="dense"
                                        id="email"
                                        label="Email Address"
                                        value={this.state.email}
                                        onChange={this.handleChange('email')}
                                        fullWidth
                                    />
                                    <TextField
                                        required
                                        margin="dense"
                                        id="password"
                                        label="Password"
                                        value={this.state.password}
                                        onChange={this.handleChange('password')}
                                        fullWidth
                                    />

                                    { this.state.error && (
                                        <Dialog
                                            open={this.state.error}
                                            onClose={this.handleClose}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                        >
                                            <DialogTitle id="alert-dialog-title"> Error </DialogTitle>
                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-description">
                                                Incorrect Email or Password. Please try again.
                                                </DialogContentText>
                                            </DialogContent>
                                        </Dialog>)
                                    }
                                      
                                    <Button disabled={!this.state.canLogin} onClick={this.loginUser} color="primary">
                                        Login
                                    </Button>

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
