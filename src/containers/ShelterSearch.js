import { connect } from 'react-redux';
import ShelterSearch from '../components/ShelterSearch';
import { getAllShelter } from '../redux/actions';

// Import related actions

const mapStateToProps = (state) => {
    // Will always return a JSON object with fields mapped to the fields defined in the Redux store.
    return {
        allShelter: state.allShelter,
        // NOTE we are now tying the seen property that will be used in the Home component to the Redux store seen field (via state.seen)
    };
}
// In order to tie the actions and reducers to the necessary Redux store for changing values, write your own mapDispatchToProps() that ties the actions to properties available within your components.
const mapDispatchToProps = (dispatch) => {
    return {
        // Contains the components' properties tied to the dispatched actions
        getAllShelter: (shelters) => dispatch(getAllShelter(shelters)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShelterSearch);
// Now, in order to use the component tied to the Redux store, you will no longer import the component itself, but instead you will import this container in its place.