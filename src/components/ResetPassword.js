import React, { Component } from "react";
import { Button, CssBaseline, TextField, Grid, Typography, Container } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

class ResetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn:false
        }
    }

    handleClick = () => {
        this.props.toggle();
    };

    toggle = () => {
        this.setState({
            loggedIn: !this.state.loggedIn
        });
    }

    render() {
        return (
            <div className="resetBackground">
                <div className="resetContent">
                <span className="close" onClick={this.toggle} to="/">
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
                                    color="secondary"
                                />
                            </Grid>
                            <br />
                            <Button
                                type="send"
                                fullWidth
                                variant="contained"
                                color="secondary"
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
export default ResetPassword; 