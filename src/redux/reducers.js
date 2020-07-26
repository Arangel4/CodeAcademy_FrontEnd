// Reducers are functions that match the name of the fields in the Redux store. These functions are used to change the vlue of those related fields though the defined actions.
import { combineReducers } from 'redux';

const allShelter = (state = null, action) => {
    switch(action.type) {
        case "FETCH_SHELTER":
            return action.value;
        default: 
    }
    return state;
}

export default combineReducers({ allShelter });