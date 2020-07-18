import React from 'react';
import Home from './components/Home';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import UserDashboard from './components/UserDashboard';
import ResetPassword from './components/ResetPassword';

function App() {
  // Top-most components are wrapped, so my entire react app has access to the Redux store.
  // 'store' is passed through Provider component to be access through the app.
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Route exact path="/" component={ Home } />
          <Route path="/user-dashboard" component={ UserDashboard } />
          <Route path="/reset-password" component={ ResetPassword } />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
