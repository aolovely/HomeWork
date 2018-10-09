import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'

import FilmDetail from './FilmDetail';
import ListFilmScreen from './ListFilmScreen';
import ListFrist from './ListFrist';

const Navigation = createStackNavigator({
  ListFristScreen: {
    screen: ListFrist,
  },

  FilmsList: {
    screen: ListFilmScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Film",
        headerStyle: {
          backgroundColor: '#51A9DC',
        },
        headerTitleStyle: {
          width: '80%',
          textAlign: 'center',
          color: '#FAFBFC',
          fontSize: 22,
          fontWeight: 'bold',
        },
      }
    }
  },
  ListDetail: {
    screen: FilmDetail,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Info",
        headerStyle: {
          backgroundColor: '#51A9DC',
        },
        headerTitleStyle: {
          width: '80%',
          textAlign: 'center',
          color: '#FAFBFC',
          fontSize: 22,
          fontWeight: 'bold',
        },

        headerLeft: (
          <TouchableOpacity
            onPress={() => navigation.navigate('FilmsList')}>
            <Image
              style={{ height: 20, width: 20, marginStart: 10 }}
              source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEKSURBVGhD7dMxagJBFMbxVbHyBhZpLTyFEMhF0tva7QkCaSwk2CQ2WUd2tDPu8wS5QBrrXECw0cksvkJlTev35PvBwLLzivmzswlRtTRN6/poUwihNsvlxeWyc15+Pr10dMuOY0QxnnkJJ+tDt224EhHiV3nTEXzl/1AVEa/Yxvuvto5h+y8iW6wedAwbI1AwAgUjUDACBSNQMAIFI1DcRUQpHvjVfMT7ctmKB9+fRrhcfk1FlLIsa5QHPw8pDvGqPeuIHc4XvRizvZOY1SNjEDEGFWNQMQYVY1AxBhVjUDEG1bUYl6+fdMSO6hiZ6LYtlzHOy0C37JnOpet8MYyrPxp9N/U10e0lyR+GznmkkPcJ3wAAAABJRU5ErkJggg==' }} />
          </TouchableOpacity>
        ),
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