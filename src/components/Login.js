import React, { Component } from "react";
import { Button, CssBaseline, TextField, Grid, Box, Typography, Container, Avatar, FormControlLabel, Checkbox,  } from '@material-ui/core';


const login = () => {
    handleClick = () => {
    this.props.toggle();
};

const togglePop = () => {
    this.setState({
        seen: !this.state.seen
    });
};

const toggle = (e) => {
    e.preventDefault();
    this.setState({
        loggedIn: !this.state.loggedIn
    });
};
return (
    this.state.loggedIn ? <UserDashboard /> : (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
            <div className="containerStyle">
                <Avatar />
                <br />
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
                <form className="formStyle" noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <div className="submitStyle">
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.toggle}>
                        Sign In
                        </Button>
                    </div>
                        <Grid container>
                            <Grid item xs>
                                <div className="btn" onClick={this.togglePop}>
                                    <Link>Forgot Password</Link>
                                </div>
                                {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
                            </Grid>
                    
                            <Grid item xs>
                                <Link to="/create-user-account" variant="body2">Create Account</Link> 
                            </Grid>
                    
                            <Grid item>
                                <Link to="/guest-login" variant="body2">Guest Login</Link>
                            </Grid>
                        </Grid>
                    </form>
            </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        )
    )
}
