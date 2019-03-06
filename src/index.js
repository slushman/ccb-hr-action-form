import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { ConnectedRouter } from 'connected-react-router';

import * as serviceWorker from './serviceWorker';
import store, { history, reduxFBConfig } from './redux/store';
import './index.css';
import App from './App';
import firebase from './firebase';

const reduxFBProps = {
  firebase,
  config: reduxFBConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={ store }>
    <ReactReduxFirebaseProvider { ...reduxFBProps }>
      <ConnectedRouter history={ history }>
        <App />
      </ConnectedRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
