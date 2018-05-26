import React from 'react';
import Button from 'material-ui/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {registerPassenger} from '../utils/auth';

export default class FormDialog extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fname : "",
      lname : "",
      email : "",
      password : "",
      preferred_card_number : "",
      preferred_billing_address : "",
      canRegister : false,
      open: false,
    };
   
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
        [name]: event.target.value,
        canRegister : this.checkFields([ this.state.fname,
                                         this.state.lname,
                                         this.state.email,
                                         this.state.password,
                                         this.state.preferred_card_number,
                                         this.state.preferred_billing_address
                                       ])
    });
  };

  checkFields = (fields) => {
    const checkField = (field) => { return !(field == "") };
    return fields.every(checkField);
  }
  
  RegisterUser = (event) => {
    const FNAME = this.state.fname;
    const LNAME = this.state.lname;
    const EMAIL = this.state.email;
    const PASSWORD = this.state.password;
    const PREFFERED_CARD_NUMBER = this.state.preferred_card_number;
    const PREFFERED_BILLING_ADDRESS = this.state.preferred_billing_address;

    registerPassenger(FNAME,LNAME,EMAIL,PASSWORD,PREFFERED_CARD_NUMBER,PREFFERED_BILLING_ADDRESS)
    .then((api) => console.log(api))
    this.handleClose();
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Register Account</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Register Account</DialogTitle>
          <DialogContent>
            <TextField
              required
              autoFocus
              margin="dense"
              id="fname"
              label="First Name"
              value={this.state.fname}
              onChange={this.handleChange('fname')}
              fullWidth
            />
            <TextField
              required
              margin="dense"
              id="lname"
              label="Last Name"
              value={this.state.lname}
              onChange={this.handleChange('lname')}
              fullWidth
            />
            <TextField
              required
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              value={this.state.email}
              onChange={this.handleChange('email')}
              fullWidth
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              value={this.state.password}
              onChange={this.handleChange('password')}
              fullWidth
            />
            <TextField
              required
              margin="dense"
              id="preferred_card_number"
              label="Card Number"
              value={this.state.preferred_card_number}
              onChange={this.handleChange('preferred_card_number')}
              fullWidth
            />
            <TextField
              required
              margin="dense"
              id="preferred_billing_address"
              label="Billing Address"
              value={this.state.preferred_billing_address}
              onChange={this.handleChange('preferred_billing_address')}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button disabled={!this.state.canRegister} onClick={this.RegisterUser} color="primary">
              Register
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}