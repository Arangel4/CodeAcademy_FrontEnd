import React from 'react';
import { Redirect, Route } from 'react-router-dom';

// NOTE the ... operator is called the spread operator. It expands the given object into individual parameters.
const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => checkAuth(rest.token) // If checkAuth() returns true, render the passed in Component, else render the Redirect.
                ? <Component {...props} />
                : <Redirect to="/login" />}
        />
    );
}
const checkAuth = (JWT) => {
    // Returns true or false, based on successful authentication.
    // A successful authentication would be that state.JWT as an actual token.
    // For testing purpose, just return a bool value.
    if (JWT != null) {
        return true
    } else {
        return false
    }
}

export default ProtectedRoute;