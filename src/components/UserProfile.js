import React, { Component } from 'react';
import { CssBaseline, Box, Container, Paper, Grid } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Copyright from './Copyright';
import NavBar from './NavBar';

class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <CssBaseline />
                    <NavBar />
                    <div className="userProfileContainer">
                        <Container fixed>
                            <Paper elevation={3} className="userProfilePaperStyle">
                                <Grid className="userProfileGrid">
                                    <Grid item xs={12} sm={12} className="editStyle">
                                        <EditIcon />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <h2>User First and Last Name</h2>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <h2>User Username</h2>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <h2>User Password</h2>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <h2>User Email</h2>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <h2>User Phone</h2>
                                    </Grid>
                                    <Grid item xs={6} sm={12} className="userProfileShelter">
                                        <h2>Shelter Administer</h2>
                                    </Grid>
                                    <Grid item xs={6} sm={12} className="userProfileShelter">
                                        <li>Women's Downtown Shelter</li>
                                    </Grid>
                                    
                                    
                                </Grid>
                            </Paper>
                            <Box mt={5}>
                                <Copyright />
                            </Box>
                        </Container>
                    </div>
            </div>
        );
    }
}
export default UserProfile;