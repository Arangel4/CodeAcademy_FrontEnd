import React from 'react';
import { Typography, Link, CssBaseline, AppBar, Toolbar, Button, Container, Paper, FormControlLabel, Checkbox } from '@material-ui/core';

function Copyright() {
    return(
        <Typography variant="body2" color="textSecondary" align="center" className="copyrightStyle">
            {'Copyright © '}
            {new Date().getFullYear()}
            {' '}
            <Link color="inherit" href="/">
                CareAmarillo
            </Link>
            {'.'}
        </Typography>
    );
}

const Home = () => {
    return (
        <div>
            <div className="homeBackground">
                <CssBaseline />
                <AppBar className="appBarStyle" position="static" color="default" elevation={0}>
                    <Toolbar className="toolBarStyle">
                        <Typography className="typoStyle" variant="h6" color="inherit" noWrap>
                            CareAmarillo
                        </Typography>
                        <div className="homeButton">
                            <Button href="#" color="primary" variant="outlined">
                                Sign In
                            </Button>
                        </div>
                    </Toolbar>
                </AppBar>
                <Container className="containerStyle" fixed>
                    <Paper className="paperStyle">
                        <FormControlLabel control={<Checkbox checked={StaticRange.checked} name="checked" />}
                        label="Secondary"
                        />
                        <br />
                        <Button href="#" color="primary" variant="outlined">
                            Search
                        </Button>
                    </Paper>

                    
                </Container>
            </div>
        <Copyright />
        </div>
    )
}
export default Home