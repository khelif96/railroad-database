import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
});

class Reservation extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstName: '2',
            lastName: '',
            origin: '',
            destination: '',
            date: '',   //probably in JAVA date format NO TIME
        };
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    required
                    id="firstName"
                    label="First Name"
                    className={classes.textField}
                    value={this.state.firstName}
                    onChange={this.handleChange('firstName')}
                    margin="normal"
                />
                <TextField
                    required
                    id="lastName"
                    label="Last Name"
                    className={classes.textField}
                    value={this.state.lastName}
                    onChange={this.handleChange('lastName')}
                    margin="normal"
                />
                <TextField
                    required
                    id="origin"
                    label="From"
                    className={classes.textField}
                    value={this.state.origin}
                    onChange={this.handleChange('origin')}
                    margin="normal"
                />
                <TextField
                    required
                    id="destination"
                    label="To"
                    className={classes.textField}
                    value={this.state.destination}
                    onChange={this.handleChange('destination')}
                    margin="normal"
                />
                <TextField
                    id="date"
                    label="Date"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />
            </form>
        );
    }
}


export default withStyles(styles)(Reservation);