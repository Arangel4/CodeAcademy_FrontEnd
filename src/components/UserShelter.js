import React, { Component } from 'react';
import { CssBaseline, Box, Typography, Container, Paper, Grid, AccordionSummary, Accordion, AccordionDetails } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Copyright from './Copyright';
import UserNavBar from './UserNavBar';

class UserShelter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            state: ""
        }
    }

    // const [expanded, setExpanded] = React.useState < string | false>(false);

    // accordionChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    //     setExpanded(isExpanded ? panel : false);
    // };

    render(){
        return (
            <div>
                <CssBaseline />
                <UserNavBar />
                    <div className="userProfileContainer">
                        <Container fixed>
                            <Paper elevation={3} className="userProfilePaperStyle">
                                <Grid className="userProfileGrid">
                                    <div className="shelterImage">
                                    </div>
                                    <div className="shelterContent">
                                    <Grid item xs={6} sm={6}>
                                        <h2>Downtown Women's Center</h2>
                                    </Grid>
                                    <Grid>
                                        <img src="./images.Shelter.jpg" alt="" />
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
                                            <Typography>
                                                (123) 456-7890
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
                                            <Typography>Shelter Hours</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Monday - Friday
                                                <br />
                                                9AM to 5PM
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
                                            <Typography>Shelter Address</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                409 Monroe Street Amarillo, TX 79101
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion >
                                    {/* expanded={expanded === 'panel2'} onChange={accordianChange('panel2')}> */}
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel4bh-content"
                                        id="panel4bh-header"
                                        >
                                            <Typography>Shelter Description</Typography>
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
                                                Total:
                                                <br />
                                                Available:
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