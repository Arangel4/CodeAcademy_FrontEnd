import React, { Component } from 'react';
import { CssBaseline, Box, Typography, AppBar, Toolbar, Link, Button, Container, Paper, Grid, AccordionSummary, Accordion, AccordionDetails } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Copyright from './Copyright';

class UserShelter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            state: ""
        }
    }

    // const [expanded, setExpanded] = React.useState < string | false>(false);

    // const accordionChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    //     setExpanded(isExpanded ? panel : false);
    // };
    render(){
        return (
            <div>
                <CssBaseline />
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
                                <Button href="#" color="secondary" variant="outlined" 
                                // onClick={this.toggleSignOut} href="/"
                                >
                                    Sign Out
                                </Button>
                            </div>
                        </Toolbar>
                    </AppBar>
                    <div className="userProfileContainer">
                        <Container fixed>
                            <Paper elevation={3} className="userProfilePaperStyle">
                                <Grid className="userProfileGrid">
                                    <Grid item xs={12} sm={12} className="editStyle">
                                        <EditIcon />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <h2>Shelter Name</h2>
                                    </Grid>
                                    <Grid>
                                        <img src="./images.Shelter.jpg" alt="" />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <h2>Shelter Phone Number</h2>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <h2>Shelter Hours</h2>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <h2>Bed Availability</h2>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <h2>Description</h2>
                                    </Grid> 
                                </Grid>
                                <div className="accordionStyle">
                                    <Accordion >
                                    {/* expanded={expanded === 'panel1'} */}
                                    {/* onChange={accordionChange('panel1')}> */}
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                        >
                                            <Typography>General Settings</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Hello!
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion >
                                    {/* expanded={expanded === 'panel2'} onChange={accordianChange('panel2')}> */}
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2bh-content"
                                        id="panel2bh-header"
                                        >
                                            <Typography>Settings</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                World!
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
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
export default UserShelter;