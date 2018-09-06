import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import React, { Component } from 'react';
import Schedule from './Schedule';

const DATA = [
  {
    "title": "Jul 6 2018 - 21:00 PM",
    "photos": [
      "http://pngimg.com/uploads/flags/flags_PNG14707.png",
      "http://pngimg.com/uploads/flags/flags_PNG14687.png",
    ],
    "name1": "Urugay",
    "name2": "VietNam"
  },
  {
    "title": "Jul 6 2018 - 21:00 PM",
    "photos": [
      "http://pngimg.com/uploads/flags/flags_PNG14707.png",
      "http://pngimg.com/uploads/flags/flags_PNG14707.png",
    ],
    "name1": "France",
    "name2": "Ustray"
  },
  {
    "title": "Jul 6 2018 - 21:00 PM",
    "photos": [
      "http://pngimg.com/uploads/flags/flags_PNG14682.png",
      "http://pngimg.com/uploads/flags/flags_PNG14687.png",
    ],
    "name1": "Campu",
    "name2": "Urugay"
  },
]

class App extends Component {
  state = {}

  renderItem = ({ item }) => <Schedule schedule={item} />

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Schedule</Text>
          <Image
            style={styles.logo}
            source={{ uri: 'http://www.pngmart.com/files/3/Sports-Ball-PNG-Clipart.png' }}
          />
          <Text style={styles.textCapital}>FIFA WORLD CUP 2018</Text>
        </View>

        <View style={styles.info}>
          <FlatList
            data={DATA}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'rgb(32, 53, 70)',
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    flex: 1,

  },
  title: {
    fontSize: 40,
    color: 'white',
    marginTop: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 20,
  },
  info: {
    flex: 1,
    alignItems: 'center',
  },
  textCapital: {
    color: 'white',
    fontSize: 15,
    marginTop: 10,
  },
  textFirst: {
    marginTop: 3,
    alignSelf: 'center',

  },
})
export default App;