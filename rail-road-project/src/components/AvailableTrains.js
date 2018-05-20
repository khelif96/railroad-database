import React, { Component } from 'react';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class AvailableTrains extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
        }
    }
    
    render() {
        console.log(this.props);
        return (
            <div>
                <Card>
                    <CardHeader title="Available Trains"/>
                    <Collapse in={this.props.expand} timeout="auto" unmountOnExit>
                        <CardContent> 
                            {this.props.firstName}
                            {this.props.lastName}
                            {this.props.origin}
                            {this.props.destination}
                            {this.props.date}
                            {this.props.time}
                        </CardContent>
                    </Collapse>
                </Card>
                
            </div>
        );
    }
}

export default AvailableTrains;