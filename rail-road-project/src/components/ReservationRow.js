import React, {Component} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


import Card from 'material-ui/Card'
class ReservationRow extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <TableRow>
        <TableCell>{this.props.TrainID}</TableCell>
        <TableCell>{this.props.TripDate}</TableCell>
        <TableCell>{this.props.From}</TableCell>
        <TableCell>{this.props.To}</TableCell>
        <TableCell>{this.props.FromTime}</TableCell>
        <TableCell>{this.props.ToTime}</TableCell>
        <TableCell>{this.props.Price}</TableCell>
        <TableCell>{this.props.ReservationDate}</TableCell>
        <TableCell>{this.props.TripID}</TableCell>
      </TableRow>
    )
  }
}

export default ReservationRow;