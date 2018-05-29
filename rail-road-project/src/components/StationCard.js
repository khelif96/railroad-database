import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import {Station,StationHeader} from '../styles/StationCard.style'
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


class StationCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            expanded : false,
        }
    }
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {

    return (
      <div>
        <Station  >
          <StationHeader
            title={ this.props.StationSymbol+ " : " + this.props.StationName}
            action={
              <IconButton onClick={this.handleExpandClick}>
                <MoreVertIcon />
              </IconButton>
            }
          />
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <StationHeader>
              <Typography component="p">
              Available Trains : 
              </Typography>
            </StationHeader>
          </Collapse>
        </Station>
      </div>
    );
  }
}

export default StationCard;