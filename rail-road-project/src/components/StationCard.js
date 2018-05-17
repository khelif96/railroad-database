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
        <Card >
          <CardHeader
            title={this.props.StationName}
          />
          <CardContent>
            <Typography component="p">
              {this.props.StationSymbol}
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Make a reservation"
            >
              <Typography paragraph> </Typography>
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

export default StationCard;