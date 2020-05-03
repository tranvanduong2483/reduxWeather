/**
 * @format
 */

import App from './App';
import {name as appName} from './app.json';

import React, {Component} from 'react';
import {Text, View, AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/store';

export default class index extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => index);
