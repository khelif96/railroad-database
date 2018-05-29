import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

class Home extends Component {
    render() {
        return (
            <div>
                <center>
                  <Typography color='primary' primary variant="display3" gutterBottom>
                    MRR Reservation System
                  </Typography>
                  <p>By: Team 5</p>
                  <p><a href="https://www.linkedin.com/in/mohamedkhelif/" >Mohamed Khelif</a></p>
                  <p><a href="https://www.linkedin.com/in/heysatyam/" >Satyam Sharma</a></p>
                  <p><a href="https://www.linkedin.com/in/abraham-villaroman-141618110/">Abraham Villaroman</a></p>
                  <Typography color="primary" variant="display2" gutterBottom>About</Typography>
                  <Paper style={{padding:50}}>
                    <p>The railroad has been extended north to St. Albans, VT and south to Roanoke, VA by adding 21 more stations to the existing 24 stations. More trains have also been added to accommodate the new stations. There are now in-total 28 trains, of which 14 travel in either direction. Each train has an origin station, a destination station, and the days when it runs. To reserve a train to travel between two stations, the train has to be running on the date of the trip, traversing the segments of the stations in the correct direction, a free seat. The availability of the seat is calculated by checking if there are seats available for each segment of the trip for the given date and train. The fare of the reservation is calculated by adding the fare associated with each segment.</p>
                  </Paper>
                  <Typography color='primary' variant="display2" gutterBottom>TechStack</Typography>
                  <Paper>
                    <Typography color='primary' variant="heading" gutterBottom>Frameworks</Typography>
                    <b>Frontend :</b> React<br/>
                    <b>Backend :</b> NodeJS<br/>
                    <b>Database :</b> MariaDB <br/>
                    <Typography color='primary' variant="heading" gutterBottom>Servers</Typography>
                      <b>Frontend and Backend Hosting:</b> AWS EC2<br/>
                      <b>Database Hosting:</b> AWS RDS

                    </Paper>
                    <Typography color='primary' variant="display2" gutterBottom>Getting Started</Typography>
                    <Paper style={{padding:50}}>
                      <ol>
                        <li>First create an account. You can only buy a ticket if you have an account</li>
                        <li>After Creating an account login. Your api_key will be saved to the browser so we can identify you for any transactions</li>
                        <li>You may view the stations, trains or a Timesheet on the schedule page</li>
                        <li>Click the Make a reservation tab to be taken to the reservations screen </li>
                        <li>From here use the dropdown menus to select an origin and destination station</li>
                        <li>As well as a Date for your trip</li>
                        <li>Submit the search and a list of available trains to that destination from your origin will be displayed along with a fare</li>
                        <li>Click on reserve to create a reservation</li>
                        <li>You may view all your reservations in the MY ACCOUNT page</li>

                      </ol>

                      </Paper>

                </center>
                <Paper style={{marginTop:50,padding:20}} ><center>CCNY SPRING 2018 | CSC 336 PROFESSOR BARNETT<br/> MOHAMED KHELIF, SATYAM SHARMA, ABRAHAM VILLAROMAN </center></Paper>
            </div>
        );
    }
}

export default Home;
