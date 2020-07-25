import React, { Component } from 'react';
import { CssBaseline, Table, TableHead, TableRow, TableBody, TableCell,  } from '@material-ui/core';
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
                <div className="tableContent">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Shelter Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {props.ShelterName.map((row, index) => (
                                <TableRow key={row.ShelterName}>
                                    <TableCell>{row["ShelterName"]}</TableCell>
                                </TableRow>
                            ))} */}
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    }
}
export default ShelterSearch