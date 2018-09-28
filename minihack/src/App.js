import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CurrentDay from './CurrentDay';
import CurrentImage from './CurrentImage';
import Temprature from './Temprature';
import DayList from './DayList';


import axios from 'axios';

class App extends Component {
  state = {
    data: [],
    dataCurrentDay: [],
    dataList: [],
    text: 'hanoi',
  }

  timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var year = a.getFullYear();
    var month = a.getMonth();
    var date = a.getDate();
    var time = date + '/' + month + '/' + year;
    return time;
  }

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.text}&appid=c8926bfc3bdf925e5191bf7f8f1e6e40`)

      .then((res) => this.setState({ dataList: res.data.list, data: res.data.list[0], dataCurrentDay: res.data.city, }))
      //.then((res) => console.log(res.data.list))
      .catch((err) => console.log(err))

    // this.setState({ data: this.state.data.splice(0, 1) })
  }

  search() {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.text}&appid=c8926bfc3bdf925e5191bf7f8f1e6e40`)
      .then((res) => res.cod === '200' ?
        this.setState({ data: res.data.list[0], dataCurrentDay: res.data.city, }) : Alert.alert('City not found'))

      .catch((err) => console.log(err))
  }

  render() {
    return (
      <View style={{ backgroundColor: 'black' }}>
        <View style={{ flexDirection: 'row', margin: '5%', }}>
          <TextInput
            style={{ height: 40, width: 245, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white', borderRadius: 10, }}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />

          <TouchableOpacity style={{ width: 100, height: 40, backgroundColor: 'white', borderRadius: 10, marginLeft: 20, alignItems: "center", justifyContent: "center", }}
            onPress={() => this.search()}>
            <Text style={{ fontSize: 18 }}>Search</Text>
          </TouchableOpacity>
        </View>

        <CurrentDay name={this.state.dataCurrentDay.name}
          dt={this.timeConverter(this.state.data.dt)} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <CurrentImage />
          <Temprature />
        </View>
        <DayList name={this.state.text} />
      </View>
    );
  }
}

export default App; <View>
</View>