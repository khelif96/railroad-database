import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Train,TrainHeader} from '../styles/TrainCard.style'
import {getStaionByID} from '../utils/stations';



class TrainCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            expanded : false,
            north : "",
            south : ""
        }
    }
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  returnDay = (number) => {
    switch(number) {
      case 0:
        return "Sunday"
        break;
      case 1:
        return "Monday"
        break;
      case 2:
        return "Tuesday"
        break;
      case 3:
        return "Wednsday"
        break;
      case 4:
        return "Thursday"
        break;
      case 5:
        return "Friday"
        break;
      case 6:
        return "Saturday"
        break;
      default:
        return "Not Running"
    }
  }

  componentDidMount(){

    getStaionByID(this.props.train_n_end)
    .then( (data) => { this.setState({
        north : data.data.station_name
    })});

    getStaionByID(this.props.train_s_end)
    .then( (data) => { this.setState({
        south : data.data.station_name
    })});
  }

  render() {

    return (
      <div>
        <Train >
          <TrainHeader
            title={"Train ID : " + this.props.train_id}
            action={
              <IconButton onClick={this.handleExpandClick}>
                <MoreVertIcon />
              </IconButton>}
          />
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography component="p">
                Train North End: {this.state.north}
              </Typography>
              <Typography component="p">
                Train South End: {this.state.south}
              </Typography>
              <Typography component="p">
              Train Direction: {this.props.train_direction === 0 ? "South Bound" : "North Bound"}
              </Typography>
              <Typography component="p">
              Day it operates on : { this.returnDay(this.props.train_days)}
              </Typography>
            </CardContent>
          </Collapse>
        </Train>
      </div>
    );
  }
}

export default TrainCard;