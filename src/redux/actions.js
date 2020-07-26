// This file will contain all of the Redux actions needed to change the Redux store.
// A Redux action is a function that returns the change to state.
export const getAllShelter = (eventObj) => {
    // let token = theToken;
    eventObj.preventDefault();
    return(dispatch) => {
        fetch("http://localhost:3000/shelters", {
            method: 'get',
        
        })
        .then(res => res.json())
        .then(allShelterDocs => {
            const action = {
                type: 'FETCH_SHELTER',
                value: allShelterDocs
            }
            dispatch(action)
        });
    }
}
