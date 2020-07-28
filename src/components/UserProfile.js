import React, { Component } from 'react';
import { CssBaseline, Box, Container, Table, TableHead, TableRow, TableCell, Paper, TableBody, Grid } from '@material-ui/core';
import Copyright from './Copyright';
import UserNavBar from './UserNavBar';
import EdiText from 'react-editext';

class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        
    }
    onSave = (val) => {
        console.log('Edited Value -> ', val);
    }

    render() {
        return (
            <div>
                <CssBaseline />
                <UserNavBar />
                    <div className="userProfileContainer">
                        <Container fixed>
                            <Paper elevation={3} className="userProfilePaperStyle">
                                <div className="profileGrid">
                                    <Grid item xs={12}>
                                        <br />
                                        <br />
                                        <Grid itemx xs={12} sm={6}>
                                            <div className="profileImage"></div>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="profileTableContent">
                                    <Table>
                                        <TableHead className="profileContent">
                                            <EdiText
                                                showButtonsOnHover
                                                type="text"
                                                value="John Doe"
                                                onSave={this.onSave}> 
                                            </EdiText>
                                            <br />
                                        </TableHead>
                                        <TableBody>
                                                <TableRow>
                                                    <TableCell><b>UserName: </b></TableCell>
                                                    <TableCell>
                                                        <EdiText 
                                                            showButtonsOnHover
                                                            type="text"
                                                            value="testuser"
                                                            onSave={this.onSave}>
                                                        </EdiText>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell><b>Password: </b></TableCell>
                                                    <TableCell>
                                                        <EdiText 
                                                            showButtonsOnHover
                                                            type="text"
                                                            value="test123"
                                                            onSave={this.onSave}>
                                                        </EdiText>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell><b>Email: </b></TableCell>
                                                    <TableCell>
                                                        <EdiText 
                                                            showButtonsOnHover
                                                            type="text"
                                                            value="jdoe@email.com"
                                                            onSave={this.onSave}>
                                                        </EdiText>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell><b>Phone: </b></TableCell>
                                                    <TableCell>
                                                        <EdiText 
                                                            showButtonsOnHover
                                                            type="text"
                                                            value="(123) 456-7890"
                                                            onSave={this.onSave}>
                                                        </EdiText>
                                                    </TableCell>
                                                </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                                <div className="shelterAdmin">
                                    <Grid item xs={6} sm={10} className="userProfileShelter">
                                        <h2>Shelter Administer</h2>
                                    </Grid>
                                    <Grid item xs={6} sm={10} className="userProfileShelter">
                                        <li>Women's Downtown Shelter</li>
                                    </Grid>
                                </div> 
                            </Paper>
                            <Box mt={5}>
                                <Copyright />
                            </Box>
                        </Container>
                    </div>
            </div>
        );
    }
}
export default UserProfile;