import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import TimeTableRow from './TimeTableRow';

class TimeTable extends Component{
  constructor(props){
    super(props);
  }


  render(){
    const style = {
      overflowX : 'scroll'
    }
    return(
      <div   style={style}>
      <Table>
        <TableHead>
        <TableRow>
          <TableCell>
          Stations<br/>Trains
          </TableCell>
          {this.props.stations.map(function(station){
            return(
              <TableCell>
                {station.station_name}
              </TableCell>
            )
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {this.props.schedule.map(function(stationList,index){
          // alert(JSON.stringify(stationList))
          return(
            <TimeTableRow index={index} stationList = {stationList}/>
          )
        })}
      </TableBody>
      </Table>
      </div>
    )
  }
}

export default TimeTable;
