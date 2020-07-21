import React, { Component } from 'react';
import { Typography, CssBaseline, Link, AppBar, Toolbar, Button, FormControl, FormLabel, RadioGroup, Container, Paper, FormControlLabel, Radio, Checkbox, InputLabel, Select, Grid, MenuItem } from '@material-ui/core';
import Login from './Login';
import SearchIcon from '@material-ui/icons/Search';
import Copyright from './Copyright';

class UserDashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            seen: false
        }
        // const [value, setValue] = React.useState('female');
        // const [age, setChild] = React.useState('');

        // const radioHandleChange = (event) => {
        //     setValue(event.target.value);
        // };
    }

    // dropDownHandleChange = (event) => {
    //     setChild(event.target.value);
    // }

    togglePop = () => {
        this.setState({
            seen: !this.state.seen
        });
    }

    render() {
        return (
            <div>
                <div className="homeBackground">
                    <CssBaseline />
                    <AppBar className="appBarStyle" position="static" color="default" elevation={0}>
                        <Toolbar className="toolBarStyle">
                            <Typography className="typoStyle" variant="h6" color="inherit" noWrap>
                                CareAmarillo
                            </Typography>
                            <div className="profileButton">
                                <Link variant="h6" color="textPrimary" href="/user-profile">Profile</Link>
                            </div>
                            <div className="profileButton">
                                <Link variant="h6" color="textPrimary" href="/user-shelter">Shelter</Link>
                            </div>
                            <div className="homeButton">
                                <Button href="#" color="primary" variant="outlined" onClick={this.togglePop}>
                                    Sign Out
                                </Button>
                                {this.state.seen ? <Login toggle={this.togglePop} /> : null}
                            </div>
                        </Toolbar>
                    </AppBar>
                    <Container className="containerStyle" fixed>
                        <Paper className="paperStyle">
                        {/* <h2>Help is one search away.</h2> */}
                            <Grid container spacing={4}>
                                
                                {/* RADIO BUTTON FOR GENDER */}
                                <Grid item xs={6}>
                                    <FormControl component="fieldset">
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup aria-label="gender" name="gender1" onChange={this.radioHandleChange}>
                                    {/*GOES ON LINE ABOVE BETWEEN NAME AND ONCHANGE value={value} */}
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="coed" control={<Radio />} label="Co-ed" />
                                    </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl className="homeDropDown">
                                    <InputLabel id="children-label">Children</InputLabel>
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
                                <Grid item xs={12}>
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
                                    </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    {/* CHECK BOX FOR MISC. */}
                                    <FormControlLabel control={<Checkbox checked={StaticRange.checked} name="checked" />}
                                    label="Temporary Stay"
                                    />
                                    <FormControlLabel control={<Checkbox checked={StaticRange.checked} name="checked" />}
                                    label="Warming Center"
                                    />
                                    <FormControlLabel control={<Checkbox checked={StaticRange.checked} name="checked" />}
                                    label="Cooling Center"
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <Button color="primary" variant="outlined">
                                <SearchIcon /> Search
                            </Button>
                        </Paper> 
                    </Container>
                </div>
            <Copyright />
            </div>
        )
    }
}
export default UserDashboard;