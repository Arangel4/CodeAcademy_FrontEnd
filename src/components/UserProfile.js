import React, { Component } from 'react';
import { CssBaseline, Box, TextField, Container, Paper, Grid } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Copyright from './Copyright';
import UserNavBar from './UserNavBar';
import EdiText from 'react-editext';

class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        
    }
    onSave = (val) => {
        console.log('Edited Value -> ', val);
    }

    render() {
        return (
            <div>
                <CssBaseline />
                <UserNavBar />
                    <div className="userProfileContainer">
                        <Container fixed>
                            <Paper elevation={3} className="userProfilePaperStyle">
                                <Grid className="userProfileGrid">
                                    <div className="profileImage">
                                    </div>
                                    <div className="profileContent">

                                    
                                    <Grid item xs={6} sm={3} className="userInfo">
                                        <EdiText
                                        showButtonsOnHover
                                        type="text"
                                        value="John Doe"
                                        onSave={this.onSave}>
                                        </EdiText>
                                        {/* <h2>John Doe</h2> */}
                                    </Grid>
                                    <Grid item xs={6} sm={3} className="">
                                    <h3>Username: </h3>
                                    <Grid item xs={6} sm={3}>
                                        <EdiText
                                            showButtonsOnHover
                                            type="text"
                                            value="testuser"
                                            onSave={this.onSave}>
                                        </EdiText>
                                    </Grid>
                                    
                                        
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <h3>Password: test123</h3>
                                        
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <h3>Email: jdoe@email.com</h3>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <h3>Phone: (123) 456-7890</h3>
                                    </Grid>
                                    </div>
                                </Grid>
                                
                                <div className="shelterAdmin">
                                    <Grid item xs={6} sm={10} className="userProfileShelter">
                                        <h2>Shelter Administer</h2>
                                    </Grid>
                                    <Grid item xs={6} sm={10} className="userProfileShelter">
                                        <li>Women's Downtown Shelter</li>
                                    </Grid>
                                </div> 
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