import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button, Link } from '@material-ui/core';
import Login from './Login';

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seen: false,
            loggedIn: false
        }
    }

    // Allows the login window to appear.
    togglePop = () => {
        this.setState({
            seen: !this.state.seen
        });
    }
    
    toggle = (e) => {
        e.preventDefault();
        this.setState({
            loggedIn: !this.state.loggedIn
        });
    }
    render() {
        return (
            <AppBar className="appBarStyle" position="static" color="default" elevation={0}>
                <Toolbar className="toolBarStyle">
                    <div className="typoStyle">
                        <Typography  variant="h4" color="inherit" noWrap>
                            <Link href="/" color="inherit">CareAmarillo</Link>
                        </Typography>
                    </div>
                    <div className="homeButton">
                        <Button color="secondary" variant="outlined" onClick={this.togglePop}>
                            Sign In
                        </Button>
                        {this.state.seen ? <Login toggle={this.togglePop} /> : null}
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}
export default NavBar;