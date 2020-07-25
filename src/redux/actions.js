// This file will contain all of the Redux actions needed to change the Redux store.

// A Redux action is a function that returns the change to state.

export const fetchShelter = () => {
    return(dispatch) => {
        fetch()
        .then(res => res.json())
        .then(response => {
            const action = {
                type: 'FETCH_SHELTER',
                value: response.Results
            }
            dispatch(action)
        })
    }
}
 