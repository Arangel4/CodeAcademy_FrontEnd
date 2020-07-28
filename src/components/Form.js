import React, { Component } from 'react';
import { Button, FormControl, Switch, FormLabel, RadioGroup, Container, Paper, FormControlLabel, Radio, Checkbox, InputLabel, Select, Grid, MenuItem } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: "",
            children: "",
            radioValue: "both",
            service: ""
        }

    }
    // Handles the values of the switch statement.
    switchChange = (event) => {
        this.setState({...this.state, [event.target.name]: event.target.checked});
    }

    // Handles the values of the radio buttons.
    radioHandleChange = (e) => {
        this.setState({
            radioValue: e.target.value,
        });
    }

    // Handles the values of the checkboxes.
    checkHandle = (e) => {
        // this.setState({ ...this.state, [event.target.name]: event.target.checked });
        this.setState({
            check: e.target.value
        });
    }

    // Handles the value change of the dropdowns.
    dropDownHandleCharge = (e) => {
        console.log(`The value is ${e.target.value}`);
        this.setState({
            children: e.target.value,
            service: e.target.value
        });
    }
render() {
    if (this.props.allShelter.length > 0) {
        return <Redirect to="/shelter-search" />;
    } else {
        return (
            <form onSubmit={(e) => this.props.getAllShelter(e)}>
                <div>
                    <Container className="containerStyle" fixed>
                        <Paper className="paperStyle">
                            <h2>Search for a shelter regarding<br /> your needs.</h2>
                            {/* <h5>Search for a shelter regarding your needs.</h5> */}
                            <br />
                            <Grid container spacing={4}>
                                {/* Gender Radio Button */}
                                <Grid item xs={12} sm={6}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Gender</FormLabel>
                                        <RadioGroup aria-label="gender" name="gender1"
                                            value={this.props.radioValue}
                                            onChange={this.radioHandleChange}
                                            >
                                            <FormControlLabel value="female" control={<Radio />} label="All Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="All Male" />
                                            <FormControlLabel value="both" control={<Radio />} label="Male & Female" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                {/* Stay Radio Button */}
                                <Grid item xs={12} sm={6}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Stay</FormLabel>
                                        <FormControlLabel
                                            control={<Switch name="1" 
                                            onChange={this.switchChange} 
                                            />}
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
                                {/* Children Drop Down */}
                                <Grid item xs={12} sm={6}>
                                    <FormControl className="homeDropDown">
                                        <InputLabel color="secondary" id="children-label"># of Children</InputLabel>
                                        <Select
                                            labelId="children-label"
                                            id="children"
                                            color="secondary"
                                            value={this.state.children}
                                            onChange={this.dropDownHandleChange}
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
                                {/* Services Drop Down */}
                                <Grid item xs={12} sm={6}>
                                    <FormControl className="homeDropDown">
                                        <InputLabel color="secondary" id="service-label">Services</InputLabel>
                                        <Select
                                            labelId="service-label"
                                            id="service"
                                            color="secondary"
                                            value={this.props.service}
                                            onChange={this.dropDownHandleChange}
                                            >
                                            <MenuItem value={0}>Housing</MenuItem>
                                            <MenuItem value={1}>Rehabilitation</MenuItem>
                                            <MenuItem value={2}>Counciling</MenuItem>
                                            <MenuItem value={3}>Volunteering</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                {/* Center Checkboxes */}
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Checkbox checked={this.props.checked}
                                        onChange={this.checkHandle}
                                        name="checked" />}
                                        label="Warming Center"/>
                                    <FormControlLabel control={<Checkbox checked={this.props.checked}
                                        onChange={this.checkHandle}
                                        name="checked" />}
                                        label="Cooling Center"/>
                                </Grid>
                            </Grid>
                            <br />
                            <br />
                            {/* Search Button */}
                            <Button color="secondary" variant="outlined" type="submit">
                                <SearchIcon /> Search
                                </Button>
                        </Paper>
                    </Container>
                </div>
            </form>
        
        );
    }
    
}
}
export default Form;