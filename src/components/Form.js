import React, { Component } from 'react';
import { Button, FormControl, Switch, FormLabel, RadioGroup, Container, Paper, FormControlLabel, Radio, Checkbox, InputLabel, Select, Grid, MenuItem } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Form from '../containers/Form';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: true,
            children: 0,
            radioValue: "coed",
            service: 0
        }

    }
    // switchChange = (event) => {
    //     this.setState({...this.state, [event.target.name]: event.target.checked});
    // }

    // radioHandleChange = (event) => {
    //     setState(event.target.value);
    // };

    // checkHandle = (e) => {
    //     this.setState({ ...this.state, [event.target.name]: event.target.checked });
    // }


    // dropDownHandleCharge = (e) => {
    //     console.log(`The value is ${e.target.value}`);
    //     this.setState({
    //         children: e.target.value,
    //         service: e.target.value
    //     });
    // }
render() {
    return (
        <form onSubmit={(e) => this.props.getAllShelter(e)}>
            <div>
                <Container className="containerStyle" fixed>
                    <Paper className="paperStyle">
                        <h2>Help is One Search Away</h2>
                        <h5>Search for a shelter regarding your needs.</h5>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup aria-label="gender" name="gender1"
                                        value={this.props.radioValue}
                                        // onChange={this.radioHandleChange}
                                        >
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
                                        control={<Switch name="1" 
                                        // onChange={this.switchChange} 
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
                            <Grid item xs={12} sm={6}>
                                <FormControl className="homeDropDown">
                                    <InputLabel color="secondary" id="children-label"># of Children</InputLabel>
                                    <Select
                                        labelId="children-label"
                                        id="children"
                                        color="secondary"
                                        value={this.state.children}
                                        // onChange={this.dropDownHandleChange}
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
                            <Grid item xs={12} sm={6}>
                                <FormControl className="homeDropDown">
                                    <InputLabel color="secondary" id="service-label">Services</InputLabel>
                                    <Select
                                        labelId="service-label"
                                        id="service"
                                        color="secondary"
                                        value={this.props.service}
                                        // onChange={this.dropDownHandleChange}
                                        >
                                        <MenuItem value={0}>Housing</MenuItem>
                                        <MenuItem value={1}>Rehabilitation</MenuItem>
                                        <MenuItem value={2}>Counciling</MenuItem>
                                        <MenuItem value={3}>Volunteering</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel control={<Checkbox checked={this.props.checked}
                                    // onChange={this.checkHandle}
                                    name="checked" />}
                                    label="Warming Center"/>
                                <FormControlLabel control={<Checkbox checked={this.props.checked}
                                    // onChange={this.checkHandle}
                                    name="checked" />}
                                    label="Cooling Center"/>
                            </Grid>
                        </Grid>
                        <br />
                        <br />
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
export default Form;