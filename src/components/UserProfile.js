import React, { Component } from 'react';
import { Link, CssBaseline, AppBar, Toolbar, Button, Login, Typography, Container, Paper, Grid } from '@material-ui/core';
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
                    <AppBar className="appBarStyle" position="static" color="default" elevation={0}>
                        <Toolbar className="toolBarStyle">
                            <Typography className="typoStyle" variant="h6" color="inherit" noWrap>
                                CareAmarillo
                            </Typography>
                            {/* SHOULD BE IN USERDASHBOARD ONLY!!!! */}
                            <div className="profileButton">
                                <Link variant="h6" color="textPrimary" href="/user-profile">Profile</Link>
                            </div>
                            <div className="profileButton">
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
                                    <Grid item xs={12} sm={6}>
                                        <EditIcon />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <h2>User First and Last Name</h2>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <h2>User Username</h2>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <h2>User Password</h2>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <h2>User Email</h2>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <h2>Shelter Administer</h2>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <h2>User Phone</h2>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <ul>
                                            <li>Women's Downtown Shelter</li>
                                        </ul>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Container>
                    </div>
                    
                <Copyright />
            </div>
        );
    }
}
export default UserProfile;