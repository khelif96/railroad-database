import React, {Component} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {getStaionByID} from '../utils/stations';


import Card from 'material-ui/Card'
class ReservationRow extends Component {
  constructor(props){
    super(props);
    this.state = {
        start : "",
        end :"",
        tripDate : "",
        reservationDate : "",
    }
  }

  componentDidMount(){

    getStaionByID(this.props.From)
    .then( (data) => { this.setState({
        start : data.data.station_name
    })});

    getStaionByID(this.props.To)
    .then( (data) => { this.setState({
        end : data.data.station_name
    })});

    const parseTripDate = new Date(this.props.TripDate);
    const reservationDate = new Date(this.props.ReservationDate);

    this.setState({
      tripDate : (parseTripDate.getMonth()+ 1) + "-" + (parseTripDate.getDay() + 1) + "-" + parseTripDate.getFullYear(),
      reservationDate : (reservationDate.getMonth()+ 1) + "-" + (reservationDate.getDay() + 1) + "-" + reservationDate.getFullYear(),
    })



  }

  render(){
    return(
      <TableRow>
        <TableCell>{this.props.TrainID}</TableCell>
        <TableCell>{this.state.tripDate}</TableCell>
        <TableCell>{this.state.start}</TableCell>
        <TableCell>{this.state.end}</TableCell>
        <TableCell>{this.props.FromTime}</TableCell>
        <TableCell>{this.props.ToTime}</TableCell>
        <TableCell>{this.props.Price}</TableCell>
        <TableCell>{this.state.reservationDate}</TableCell>
        <TableCell>{this.props.TripID}</TableCell>
      </TableRow>
    )
  }
}

export default ReservationRow;