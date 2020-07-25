import React, { Component } from 'react';
import { Button, TextField, Typography, Container, CssBaseline, Avatar, FormControlLabel, Checkbox, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import UserDashboard from './UserDashboard';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
        }
    }
    // Change page when button is clicked.
    toggle = () => {
        this.setState({
            loggedIn: !this.state.loggedIn
        });
    }

    // Close from the sign in pop up box.
    handleClick = () => {
        this.props.toggle();
    };

    
    render() {
        return(
            // this.props.loggedIn ? <UserDashboard /> : (
            <form onSubmit={this.props.handleLogin}>
                <div className="loginPopUpBackground">
                    <div className="loginPopUpContent">
                        <span className="close" 
                        onClick={this.handleClick}
                        >
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
                                            id="userName"
                                            label="User Name"
                                            name="username"
                                            autoFocus
                                            color="secondary"
                                        />
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="userPassword"
                                            label="Password"
                                            type="password"
                                            id="userPassword"
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
                                                >
                                            Sign In
                                            </Button>
                                        </div>
                                        <Grid container>
                                            <Grid item xs>
                                                <div className="loginForgotPassword">
                                                    <Link to="/reset-password" variant="body2">Forgot Password</Link>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </div>
                            </Container>
                    </div>
                </div>
            </form>
            // )
        );
    }
}
export default Login;