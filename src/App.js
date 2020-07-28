import React, { Component } from 'react';
import Home from './containers/Home';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import UserDashboard from './containers/UserDashboard';
import ResetPassword from './components/ResetPassword';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import UserShelter from './components/UserShelter';
import ShelterSearch from './containers/ShelterSearch';
import ProtectedRoute from '../src/ProtectedRoute';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      JWT: ""
    }
  }

  loginEventHandler = (e) => {
    e.preventDefault();
    // Get the Username and Password from the form.
    // e.target is the form and e.target.username is the input textfield with the name attribute of 'username'.
    let theUsername = e.target.username.value;
    let thePassword = e.target.password.value;
    console.log(`The given username is ${theUsername} and the given password is ${thePassword}`);
    let credentials = {
      // Make a JSON object that will be passed to the backend API.
      userName: theUsername,
      userPassword: thePassword
    }


    // fetch("http://localhost:3000/users/5f1a471bd71aa61fb4388246")
    // .then(response => response.json())
    // .then(theUser => {
    //   console.log(`The test Person: ${theUser}`);
    // }).catch((error) => {
    //   console.log(`ERROR! ${error}`);
    // });

    // Make the requet of the neccessary endpoint to successfully authenticate.
    fetch("http//localhost:3000/users/authenticate", {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(credentials),
    })
    .then((response) => response.json())
    .then((theData) => {
      console.log(`The data from logging in is ${theData}`);
      this.setState({
        // Based on the API's successful authentication, there should be a token field in the returned JSON object. Use that field to update the state's JWT field.
        JWT: theData.token,
      }, () => {
        console.log(this.state.JWT);
      });
    });
  }
  // Top-most components are wrapped, so my entire react app has access to the Redux store.
  // 'store' is passed through Provider component to be access through the app.
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <Route exact path="/" component={ Home } />
            <Route path="/reset-password" component={ ResetPassword } />
            {/* <Route path="/login" render={(props) => <Login handleLogin={this.loginEventHandler} />} /> */}
            <Route path="/login" component={ Login } />
            <Route path="/user-profile" component={ UserProfile } />
            <Route path="/user-shelter" component={ UserShelter } />
            <Route path="/shelter-search" component={ ShelterSearch } />
            <Route path="/user-dashboard" component={ UserDashboard } />
          </Router>
        </div>
      </Provider>
    );
  }
}


export default App;
