import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';


import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'

import ItemTouchable from '../components/ItemTouchable';
import ConvertScreen from './ConvertScreen';
import TypeScreen from './TypeScreen';

const Navigation = createStackNavigator({
  Convert: {
    screen: ConvertScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Convertable',
        headerTitleStyle: {
          color: '#ff8000',
          fontSize: 22,
          fontWeight: '800',
        },
        headerRight: (
          <TouchableOpacity
            onPress={() => { navigation.navigate('TypeDetail') }}
          >
            <Text
              style={{
                color: '#4d4dff',
                fontSize: 18,
                marginEnd: 20,
                fontWeight: '600'
              }}
            >Type
            </Text>
          </TouchableOpacity>
        )
      }
    }
  },

  TypeDetail: {
    screen: TypeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Type',
        headerTitleStyle: {
          width: '80%',
          textAlign: 'center',
          color: '#ff8000',
          fontSize: 22,
          fontWeight: '800',
        },
        headerLeft: (
          <TouchableOpacity
            onPress={() => { navigation.navigate('Convert') }}
          >
            <Text
              style={{
                color: '#4d4dff',
                fontSize: 18,
                marginStart: 20,
                fontWeight: '600'
              }}
            >Back
            </Text>
          </TouchableOpacity>
        )
      }
    }
  }
})

const store = createStore(rootReducer)

class App extends Component {
  state = {}
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;