import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import Card from 'material-ui/Card'
class TrainRowSchedule extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <TableRow>
      <TableCell><h1>{this.props.train.TrainID}</h1></TableCell>
      <TableCell><h1>{this.props.train.Departure}</h1></TableCell>
      <TableCell><h1>{this.props.train.Arrival}</h1></TableCell>
      <TableCell><h1 color="primary">${this.props.totalFare}</h1></TableCell>
      <TableCell><Button variant="raised" color="primary">Reserve</Button></TableCell>

      </TableRow>
    )
  }
}

export default TrainRowSchedule;
