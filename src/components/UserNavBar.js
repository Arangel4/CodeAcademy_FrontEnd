import React, { Component } from 'react';
import { Typography, Link, AppBar, Toolbar, Button } from '@material-ui/core';
import Home from './Home';

class UserNavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedOut: true
        }
    }
    toggleSignOut = () => {
        this.setState({
            loggedOut: !this.state.loggedOut
        });
    }
    
    render() {
        return(
            this.props.loggedOut ? <Home /> : (
                <div>
                    <AppBar className="appBarStyle" position="static" color="default" elevation={0}>
                        <Toolbar className="toolBarStyle">
                        <div className="typoStyle">
                            <Typography variant="h4" color="inherit" noWrap>
                                CareAmarillo
                            </Typography>
                        </div>
                            <div className="profileButton">
                                <Link variant="h6" color="textPrimary" href="/user-profile">Profile</Link>
                            </div>
                            <div className="shelterButton">
                                <Link variant="h6" color="textPrimary" href="/user-shelter">Shelter</Link>
                            </div>
                            <div className="homeButton">
                                <Button color="secondary" variant="outlined" 
                                onSubmit={this.toggleSignOut} href="/">
                                    Sign Out
                                </Button>
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
            )
        )
    }
}
export default UserNavBar;