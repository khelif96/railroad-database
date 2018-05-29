import React, { Component } from 'react';
import TimeTable from '../components/schedule/TimeTable';
import {getSchedule} from '../utils/schedule';
class Schedule extends Component {
  constructor(props){
    super(props);
    this.state = {
      schedule: []
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
  }
  render() {
    return (
      <div>
        {this.state.schedule.map(function(station){
          return(<div>{station.station_id}</div>)
        })}
        <TimeTable schedule={this.state.schedule}/>
      </div>
    );
  }
}

export default Schedule;
