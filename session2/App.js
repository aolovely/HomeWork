import { View, Text, StyleSheet, Image } from 'react-native';
import React, { Component } from 'react';
import Custom from './CustomComponent';


class App extends Component {
  state = {}
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
          <View style={styles.info1}>
            <Text style={styles.textFirst}>Jul 6 2018 - 21:00 PM</Text>
            <Custom name1='Urugay'
              imageUri1={'http://pngimg.com/uploads/flags/flags_PNG14707.png'}
              name2='France'
              imageUri={'http://pngimg.com/uploads/flags/flags_PNG14682.png'}
            ></Custom>
          </View>
          <View style={styles.info1}>
            <Text style={styles.textFirst}>Jul 6 2018 - 22:00 PM</Text>
            <Custom name1='Urugay'
              imageUri1={'http://pngimg.com/uploads/flags/flags_PNG14707.png'}
              name2='France'
              imageUri={'http://pngimg.com/uploads/flags/flags_PNG14687.png'}
            ></Custom>
          </View>
          <View style={styles.info1}>
            <Text style={styles.textFirst}>Jul 6 2018 - 23:00 PM</Text>
            <Custom name1='Urugay'
              imageUri1={'http://pngimg.com/uploads/flags/flags_PNG14707.png'}
              name2='France'
              imageUri={'http://pngimg.com/uploads/flags/flags_PNG14707.png'}
            ></Custom>
          </View>
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
  info1: {
    marginTop: 18,
    borderRadius: 10,
    width: 350,
    height: 70,
    backgroundColor: 'rgb(47, 78, 94)',
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