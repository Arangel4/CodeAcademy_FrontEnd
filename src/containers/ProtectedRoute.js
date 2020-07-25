import { connect } from 'react-redux';
import ProtectedRoute from '../ProtectedRoute';

// Import related actions


const mapStateToProps = (state) => {
    // Will always return a JSON object with fields mapped to the fields defined in the Redux store.
    return {
        token: state.token,
        // NOTE we are now tying the seen property that will be used in the Home component to the Redux store seen field (via state.seen)
    };
}
export default connect(mapStateToProps)(ProtectedRoute);
// Now, in order to use the component tied to the Redux store, you will no longer import the component itself, but instead you will import this container in its place.