import React, { Component } from 'react';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TrainCard from './TrainCard';
import TrainRowSchedule from './TrainRowSchedule';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class AvailableTrains extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
        }
    }

    render() {
        return (
            <div>
                <Card>
                    <CardHeader title="Available Trains"/>
                    <Collapse in={this.props.expand} timeout="auto" unmountOnExit>
                        <CardContent>
                          <Table>
                            <TableHead>
                            <TableRow>
                              <TableCell>TrainID</TableCell>
                              <TableCell>Departure Time</TableCell>
                              <TableCell >Arrival Time</TableCell>
                              <TableCell>Price</TableCell>
                              <TableCell>Reserve</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {this.props.trains.map(train => {
                              return(
                                <TrainRowSchedule totalFare={this.props.totalFare.toFixed(2)} train={train}/>
                              )
                            })}
                          </TableBody>
                          </Table>
                        </CardContent>
                    </Collapse>
                </Card>

            </div>
        );
    }
}

export default AvailableTrains;
