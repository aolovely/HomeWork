import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import CakeItem from './CakeItem';
import { data } from './database.json'
import CakeListScreen from './CakeListScreen';
import CakeDetailScreen from './CakeDetailScreen';

const Navigation = createStackNavigator({
  CakeList: {
    screen: CakeListScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Cakes',
      }
    }
  },
  CakeDetail: {
    screen: CakeDetailScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: navigation.getParam('cake').title,
      }
    }
  }
})

class App extends Component {
  state = {}


  render() {
    return (
      <Navigation />
    )
  }
}

export default App;