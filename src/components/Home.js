import React, { Component } from 'react';
import { Typography, Link, CssBaseline, AppBar, Toolbar, Button, FormControl, Switch, FormLabel, RadioGroup, Container, Paper, FormControlLabel, Radio, Checkbox, InputLabel, Select, Grid, MenuItem, Box } from '@material-ui/core';
import Login from './Login';
import SearchIcon from '@material-ui/icons/Search';
import Copyright from './Copyright';
import NavBar from './NavBar';


    const switchChange = (event) => {
        this.setState({...this.state, [event.target.name]: event.target.checked});
    }

    // const [value, setValue] = React.useState('female');
    // const [age, setChild] = React.useState('');

    // const radioHandleChange = (event) => {
    //     setValue(event.target.value);
    // };

    // dropDownHandleChange = (event) => {
    //     setChild(event.target.value);
    // }

const Home = (props) => {
        return (
            <div>
                <div className="homeBackground">
                    <CssBaseline />
                    <NavBar />
                    <Container className="containerStyle" fixed>
                        <Paper className="paperStyle">
                        {/* <h2>Help is One Search Away</h2> */}
                        <h5>Search for a shelter regarding your needs.</h5>
                            <Grid container spacing={4}>
                                {/* RADIO BUTTON FOR GENDER */}
                                <Grid item xs={12} sm={6}>
                                    <FormControl component="fieldset">
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup aria-label="gender" name="gender1">  
                                    {/* onChange={this.radioHandleChange} */}
                                    {/*GOES ON LINE ABOVE BETWEEN NAME AND ONCHANGE value={value} */}
                                    <FormControlLabel value="female" control={<Radio />} label="All Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="All Male" />
                                    <FormControlLabel value="coed" control={<Radio />} label="Co-ed" />
                                    </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl component="fieldset">
                                    <FormLabel component="legend">Stay</FormLabel>
                                    <FormControlLabel
                                    control={<Switch name="1" onChange={switchChange}/>}
                                    label="One Night"
                                    />
                                    <FormControlLabel
                                    control={<Switch name="2" />}
                                    label="Temporary"
                                    />
                                    <FormControlLabel
                                    control={<Switch name="3" />}
                                    label="Homeless"
                                    />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl className="homeDropDown">
                                    <InputLabel id="children-label"># of Children</InputLabel>
                                    <Select
                                        labelId="children-label"
                                        id="children"
                                        // value={children}
                                        // onChange={dropDownHandleChange}
                                        >
                                            <MenuItem value={0}>0</MenuItem>
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                            <MenuItem value={6}>6</MenuItem>
                                            <MenuItem value={7}>7</MenuItem>
                                            <MenuItem value={8}>8</MenuItem>
                                            <MenuItem value={9}>9</MenuItem>
                                            <MenuItem value={10}>10</MenuItem>
                                    </Select>
                                    </FormControl>
                                </Grid>
                                {/* DROP DOWN FOR SERVICES */}
                                <Grid item xs={12} sm={6}>
                                    <FormControl className="homeDropDown">
                                    <InputLabel id="service-label">Services</InputLabel>
                                    <Select
                                        labelId="service-label"
                                        id="service"
                                        // value={service}
                                        // onChange={dropDownHandleChange}
                                        >
                                            <MenuItem value={0}>Housing</MenuItem>
                                            <MenuItem value={1}>Rehabilitation</MenuItem>
                                            <MenuItem value={2}>Counciling</MenuItem>
                                            <MenuItem value={3}>Volunteering</MenuItem>
                                    </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    {/* CHECK BOX FOR MISC. */}
                                    <FormControlLabel control={<Checkbox checked={StaticRange.checked} name="checked" />}
                                    label="Warming Center"
                                    />
                                    <FormControlLabel control={<Checkbox checked={StaticRange.checked} name="checked" />}
                                    label="Cooling Center"
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <br />
                            <Button color="primary" variant="outlined">
                                <SearchIcon /> Search
                            </Button>
                        </Paper> 
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </Container>
                </div>
            </div>
        )
}
export default Home