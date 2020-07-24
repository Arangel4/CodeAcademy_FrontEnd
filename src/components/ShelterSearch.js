import React, { Component } from 'react';
import { CssBaseline,  } from '@material-ui/core';
import NavBar from './NavBar';

class ShelterSearch extends Component {
    constructor(props) {
        super (props)
        this.state = {
            state: ""
        }
    }
    render() {
        return (
            <div>
                <CssBaseline />
                <NavBar />
            </div>
        );
    }
}
export default ShelterSearch