import React from 'react';
import { CssBaseline, Table, TableHead, TableRow, TableBody, TableCell, Link  } from '@material-ui/core';
import NavBar from './NavBar';


const ShelterSearch = (props) => {
    console.log("In SS!");
    console.log(props);
    return (
        <div>
            <CssBaseline />
            <NavBar />
            <div className="tableContent">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><h1>Shelters</h1></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.allShelter.map((row, index) => (
                            <TableRow key={row["shelterName"]}>
                                <TableCell><Link color="inherit" href="/shelter">{row["shelterName"]}</Link></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    ); 
}
export default ShelterSearch