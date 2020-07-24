import React, { Component } from 'react';
import UserDashboard from './UserDashboard';
import { Button, TextField, Typography, Container, CssBaseline, Avatar, FormControlLabel, Checkbox, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
        }
    }
    // Change page when button is clicked.
    toggle = (e) => {
        this.setState({
            loggedIn: !this.state.loggedIn
        });
    }

    // Close from the sign in pop up box.
    handleClick = () => {
        this.props.toggle();
    };

    // Display the toggle box for Reset Password.
    togglePop = () => {
        this.setState({
            seen: !this.state.seen
        });
    };

    
    render() {
        console.log(`${this.state.loggedIn}`);
        return(
            this.state.loggedIn ? <UserDashboard /> : (
                <div className="loginPopUpBackground">
                    <div className="loginPopUpContent">
                        <span className="close" onClick={this.handleClick}>
                            <CloseIcon />
                        </span>
                            <Container component="main" maxWidth="xs">
                                <CssBaseline />
                                <div className="loginContainerStyle">
                                    <Avatar />
                                    <br />
                                    <Typography component="h1" variant="h5">
                                        Sign in
                                    </Typography>
                                    <form className="loginFormStyle" noValidate>
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
                                            color="secondary"
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
                                            color="secondary"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox value="remember" color="secondary"/>}
                                            label="Remember me"
                                        />
                                        <div className="loginSubmitStyle">
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                color="secondary"
                                                onClick={this.toggle} href="/user-dashboard">
                                            Sign In
                                            </Button>
                                        </div>
                                        <Grid container>
                                            <Grid item xs>
                                                <div onClick={this.togglePop} className="loginForgotPassword">
                                                    <Link to="/reset-password" variant="body2">Forgot Password</Link>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </div>
                            </Container>
                    </div>
                </div>
            )
        );
    }
}
export default Login;