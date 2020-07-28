import React, { Component } from 'react';
import { CssBaseline, Box, Typography, Container, Link, Paper, Grid, AccordionSummary, Accordion, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Redirect } from 'react-router-dom';
import EdiText from 'react-editext';
import Copyright from './Copyright';
import NavBar from './NavBar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class UserShelter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            state: ""
        }
    }
    onSave = (val) => {
        console.log('Edited Value -> ', val);
    }

    // const [expanded, setExpanded] = React.useState < string | false>(false);

    // accordionChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    //     setExpanded(isExpanded ? panel : false);
    // };

    render(){
        if (this.props.allShelter.length > 0) {
            return <Redirect to="/shelter-search" />;
        } else {
        return (
            <form onClick={(e) => this.props.getAllShelter(e)}>
                <div>
                    <CssBaseline />
                    <NavBar />
                        <div className="userShelterContainer">
                            <Container fixed>
                                <Paper elevation={3} className="userProfilePaperStyle">
                                    <Grid className="userProfileGrid">
                                        <Grid item xs={12} sm={1} className="backArrowStyle">
                                            <Link href="/shelter-search"><ArrowBackIcon fontSize="large"/></Link>
                                        </Grid>
                                        <Grid item xs={6} sm={12}>
                                            <div className="shelterImage">
                                            </div>
                                        </Grid>
                                        <div className="shelterContent">
                                        <Grid item xs={6} sm={6}>
                                            <h2>Downtown Women's Center</h2>
                                        </Grid>
                                        <Grid>
                                            <img src="./images/Shelter.jpg" alt="" />
                                        </Grid>
                                        </div>
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
                                                <Typography>Phone Number</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>(908) 765-4321</Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion >
                                        {/* expanded={expanded === 'panel2'} onChange={accordianChange('panel2')}> */}
                                            <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2bh-content"
                                            id="panel2bh-header"
                                            >
                                                <Typography>Hours</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Monday - Friday
                                                    <br />
                                                    value="9AM to 5PM
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion >
                                        {/* expanded={expanded === 'panel2'} onChange={accordianChange('panel2')}> */}
                                            <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel3bh-content"
                                            id="panel3bh-header"
                                            >
                                                <Typography>Address</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>409 Monroe Street Amarillo, TX 79101</Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion >
                                        {/* expanded={expanded === 'panel2'} onChange={accordianChange('panel2')}> */}
                                            <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel4bh-content"
                                            id="panel4bh-header"
                                            >
                                                <Typography>Description</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et felis luctus, sagittis odio id, tincidunt lectus. Sed porta lectus ultricies mi malesuada tempus. Fusce eget est nec lorem vehicula luctus. Nunc mollis, turpis ac malesuada feugiat, lectus nibh pulvinar metus, eu mollis velit nisl varius mi. Mauris vitae pretium metus. Maecenas interdum est eu urna imperdiet suscipit. Sed tincidunt tortor nec scelerisque pulvinar. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ac ultrices nisi. Cras at augue euismod, malesuada quam in, dapibus velit.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion >
                                        {/* expanded={expanded === 'panel1'} */}
                                        {/* onChange={accordionChange('panel1')}> */}
                                            <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                            >
                                                <Typography>Bed Availability</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                Total: 50
                                                <br />
                                                Available: 25
                                                    <EdiText
                                                        showButtonsOnHover
                                                        type="text"
                                                        value=""
                                                        onSave={this.onSave}> 
                                                    </EdiText>
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
            </form>
        );
        }
        
    }
}
export default UserShelter;