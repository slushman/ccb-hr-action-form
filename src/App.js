import React, { Component } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import { Navigation } from './components/Navigation';
import { withAuthentication } from './components/Session';

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
      </Router>
    );
  }
}

export default withAuthentication( App );
