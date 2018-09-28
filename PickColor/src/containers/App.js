import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Slider,
  FlatList,
} from 'react-native';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'
import Slider2 from "react-native-slider";

import ColorControl from '../components/ColorControl';
import ListScreen from './ListScreen';

const store = createStore(rootReducer)
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ListScreen />
      </Provider>
    );
  }
}

export default App;