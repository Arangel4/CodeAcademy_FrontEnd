import React from 'react';
import { Typography, Link } from '@material-ui/core';

// Copyright function is displayed at the bottom of component every page.
function Copyright() {
    return(
        <div className="copyrightStyle">
            <Typography variant="body2" align="center">
                {'Copyright © '}
                {new Date().getFullYear()}
                {' '}
                <Link color="inherit" href="/">
                    CareAmarillo
                </Link>
                {'.'}
            </Typography>
        </div>
    );
}

export default Copyright;