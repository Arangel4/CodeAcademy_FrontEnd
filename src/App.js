import React from 'react';
import Home from './components/Home';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
