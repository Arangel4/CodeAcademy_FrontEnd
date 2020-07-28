import React, { Component } from 'react';
import { CssBaseline, Box } from '@material-ui/core';
import Form from '../containers/Form';
import Copyright from './Copyright';
import NavBar from './NavBar';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            state: ""
        }
    }

    render() {
        return (
            <div>
                <div className="homeBackground">
                    <CssBaseline />
                    <NavBar />
                    <Form />
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </div>
            </div>
        )
    }
}
export default Home