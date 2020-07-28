import React, { Component } from 'react';
import { CssBaseline, Box } from '@material-ui/core';
import Copyright from './Copyright';
import UserNavBar from './UserNavBar';
import Form from '../containers/Form';

class UserDashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            state: ""
        }
    }

    render() {
        return (
            <div>
                <div className="homeBackground">
                    <CssBaseline />
                   <UserNavBar />
                    <Form />
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </div>
            </div>
        )
    }
}
export default UserDashboard;