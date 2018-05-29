import React, { Component } from 'react';
import TimeTable from '../components/schedule/TimeTable';
import {getSchedule} from '../utils/schedule';
import {getStations} from '../utils/stations';
class Schedule extends Component {
  constructor(props){
    super(props);
    this.state = {
      schedule: [],
      stations: []
    }
  }
  componentDidMount(){
    getSchedule()
    .then(schedule => {
      this.setState({schedule: schedule.data})
    })
    .catch(error => {
      alert(error)
    })
    getStations()
    .then(stations => {
      this.setState({stations : stations.data})
    })
    .catch(error => {
      alert(error)
    })
  }
  render() {
    return (
      <div>
        {this.state.schedule.map(function(station){
          return(<div>{station.station_id}</div>)
        })}
        <TimeTable stations={this.state.stations} schedule={this.state.schedule}/>
      </div>
    );
  }
}

export default Schedule;
