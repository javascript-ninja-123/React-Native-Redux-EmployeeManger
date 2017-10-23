import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import Router from './Router';
import thunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);





export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router />
      </Provider>
    );
  }
}
