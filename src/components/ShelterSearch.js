import React from 'react';
import { CssBaseline, Table, TableHead, TableRow, TableBody, TableCell,  } from '@material-ui/core';
import NavBar from './NavBar';

const ShelterSearch = (props) => {
    return (
        <div>
            <CssBaseline />
            <NavBar />
            <div className="tableContent">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Shelters</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                        {props.allShelter.map((row, index) => (
                            <TableRow key={row["shelterName"]}>
                                <TableCell>{row["shelterName"]}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    ); 
}
export default ShelterSearch