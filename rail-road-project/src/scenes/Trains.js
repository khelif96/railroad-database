import React, { Component } from 'react';
import TrainCard from '../components/TrainCard.js';
import {baseUrl} from '../utils/baseUrl';
import Grid from '@material-ui/core/Grid';
import {Container} from '../styles/TrainCard.style'

class Trains extends Component {
    constructor(props){
        super(props);
        this.state = {
            trains : [],
        }
    }
    componentDidMount(){
        fetch(baseUrl + '/trains')
        .then( result => {
            return result.json()
        }).then( data => {
            let trains = data.map( (train) => {
                return ( <TrainCard train_id={train.train_id} train_n_end={train.train_n_end} train_s_end={train.train_s_end} train_direction={train.train_direction} train_days={train.train_days} />)
            })
            this.setState({trains : trains})
        })
    }
    render() {
        return (
            <Container>
                <Grid justify="center" container spacing={16}>
                    {this.state.trains.map( (train) => (
                    <Grid key={train.train_id} item>
                        {train}
                    </Grid>
                    ))}
                </Grid>
            </Container>
        );
    }
}

export default Trains;
