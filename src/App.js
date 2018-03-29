import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'react-native-firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
      try{
          firebase.app();
      }
      catch (error)
      {
          console.log('error getting firebase app, trying to initialize app again');

          const firebaseOption = {
              apiKey: 'xxxxxxxxxxxxxx',
              appId: 'xxxxxxxxxxxxxx',
              databaseURL: 'xxxxxxxxxxxxxx',
              messagingSenderId: 'xxxxxxxxxxxxxx',
              projectId: 'xxxxxxxxxxxxxx',
              storageBucket: 'xxxxxxxxxxxxxx'
          }
          firebase.initializeApp(firebaseOption, '');
      }
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
