import React from 'react';
import { CssBaseline, Table, TableHead, TableRow, TableBody, Box, TableCell, Link } from '@material-ui/core';
import NavBar from './NavBar';
import Pagination from '@material-ui/lab/Pagination';
import Copyright from './Copyright';

const ShelterSearch = (props) => {
    let value = 1

    const [page, setPage] = React.useState(1);
    const handleChange = (e) => {
        setPage(value)
    }
    // Displays all of the Shelters in the database.
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
                                <TableCell>
                                    <div className="linkStyle"> 
                                        <Link color="inherit" href="/shelter">{row["shelterName"]}</Link>
                                    </div> 
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <br />
                    <Pagination count={10} page={page} onChange={handleChange} />
                <Box mt={5}>
                    <Copyright />
                </Box>
            </div>
        </div>
    );
}
export default ShelterSearch