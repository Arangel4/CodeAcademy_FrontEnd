import React, { Component } from "react";
import { Button, CssBaseline, TextField, Grid, Typography, Container } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export default class ResetPassword extends Component {
    handleClick = () => {
        this.props.toggle();
    };

    // toggle = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         loggedIn: !this.state.loggedIn
    //     });
    // }

    render() {
        return (
            <div className="resetBackground">
                <div className="resetContent">
                <span className="close" onClick={this.handleClick}>
                    <CloseIcon />
                </span>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className="containerStyle">
                        <Typography className="textStyle" component="h7" variant="h5">
                            Enter your email to have a link sent to reset your password.
                        </Typography>
                        <form className="formStyle" noValidate>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <br />
                            <Button
                                type="send"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submitStyle" 
                                onClick={this.toggle} href="/">
                                Send
                            </Button>
                        </form>
                    </div>
                    </Container>
                </div>
            </div>
        );
    }
}
  