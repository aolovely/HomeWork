import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import IdStreamDetailScreen from './IdStreamDetailScreen';
import DotaListScreen from './DotaListScreen';
import HeroDetailScreen from './HeroDetailScreen';

const Navigation = createStackNavigator({
  DotaList: {
    screen: DotaListScreen,
  },
  HeroDetail: {
    screen: HeroDetailScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: "DOTA",
        headerStyle: {
          backgroundColor: 'rgb(41,41,41)',
        },
        headerTitleStyle: {
          width: '80%',
          textAlign: 'center',
        },
        headerTintColor: 'white',

      }
    }
  },
  IdStreamDetail: {
    screen: IdStreamDetailScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: "DOTA",
        headerStyle: {
          backgroundColor: 'rgb(41,41,41)',
        },
        headerTitleStyle: {
          width: '80%',
          textAlign: 'center',
        },
        headerTintColor: 'white',

      }
    }
  },
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