import React, { Component } from 'react';
import { Link, CssBaseline, AppBar, Toolbar, Button, Login, Box, Typography, Container, Paper, Grid } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

function Copyright() {
    return(
        <div className="copyrightStyle">
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                {new Date().getFullYear()}
                {' '}
                <Link color="inherit" href="/">
                    CareAmarillo
                </Link>
                {'.'}
            </Typography>
        </div>
    );
}

class UserShelter extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <CssBaseline />
                    <AppBar className="appBarStyle" position="static" color="default" elevation={0}>
                        <Toolbar className="toolBarStyle">
                            <div className="typoStyle">
                                <Typography variant="h4" color="inherit" noWrap>
                                    CareAmarillo
                                </Typography>
                            </div>
                            {/* SHOULD BE IN USERDASHBOARD ONLY!!!! */}
                            <div className="profileButton">
                                <Link variant="h6" color="textPrimary" href="/user-profile">Profile</Link>
                            </div>
                            <div className="shelterButton">
                                <Link variant="h6" color="textPrimary" href="/user-shelter">Shelter</Link>
                            </div>
                            {/* INBETWEEN COMMENTS IN USERDASHBOARD ONLY!!!!! */}
                            <div className="homeButton">
                                <Button href="/" color="primary" variant="outlined" onClick={this.toggle}>
                                    Sign Out
                                </Button>
                            </div>
                        </Toolbar>
                    </AppBar>
                    <div className="userProfileContainer">
                        <Container fixed>
                            <Paper elevation={3} className="userProfilePaperStyle">
                                <Grid className="userProfileGrid">
                                    <Grid item xs={12} sm={12} className="editStyle">
                                        <EditIcon />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <h2>Shelter Name</h2>
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
export default UserShelter;