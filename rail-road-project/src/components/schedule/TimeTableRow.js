import React, {Component} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
class TimeTableRow extends Component{
  constructor(props){
    super(props);
    console.log(this.props.index)

  }
  render(){
    return(
      <TableRow hover>
      <TableCell>
      <b>Train_ID</b><br/>
      <center><h2>{this.props.index+1}</h2></center>
      </TableCell>
      {this.props.stationList.map(function(time){
        return(<TableCell hover>
        <b>Time in:</b> {time.time_in}<br/>
        <b>Time out:</b> {time.time_out}
        </TableCell>
      )
      })}
      </TableRow>
    )
  }
}

export default TimeTableRow;
