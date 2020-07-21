// This file will contain all of the Redux actions needed to change the Redux store.

// A Redux action is a function that returns the change to state.
export const switchChange = (changedValue) => {
    return {
        type: "CHANGED_VALUE",  // All actions have this "type" field, which is always uppercase.
        value: changedValue
    }
    // this.setState({...this.state, [event.target.name]: event.target.checked});
}