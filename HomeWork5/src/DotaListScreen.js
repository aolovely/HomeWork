import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Keyboard,
  Button,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

class DotaListScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: null,
      textHero: null
    };
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (

      <KeyboardAvoidingView style={styles.container}>
        <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Text style={styles.textLogo}>DOTA</Text>
              <Text style={styles.textTitle}>cộng đồng Dota Việt Nam</Text>
            </View>
            <View style={styles.logoContainer}>
              <TextInput style={styles.input}
                placeholder="Tìm kiếm theo id stream"
                placeholderTextColor='white'
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}
              />
              <TextInput style={styles.input}
                placeholder="Tìm kiếm theo hero"
                placeholderTextColor='white'
                onChangeText={(textHero) => this.setState({ textHero })}
                value={this.state.textHero} />
              <TouchableOpacity style={styles.button}
                onPress={() => this.state.text != null
                  ? this.props.navigation.navigate('IdStreamDetail', {
                    text: this.state.text,
                  })
                  : (this.state.textHero != null && this.props.navigation.navigate('HeroDetail'))
                }>
                <Text style={styles.TextSearch}>Tìm Kiếm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(41,41,41)',
    flex: 1,

  },
  logoContainer: {
    //backgroundColor: 'rgb(41,41,41)',
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  textLogo: {
    color: 'white',
    fontSize: 100,
    fontWeight: 'bold',
  },
  textTitle: {
    //color: '#f7c744',
    color: 'white',
    fontSize: 18,

    opacity: 0.3,
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 300,
    padding: 20,
    backgroundColor: 'red'
  },
  viewSearch: {
    height: 50,
    //  backgroundColor: 'rgba(255,255,255,0.2)',
    width: Dimensions.get('window').width - 30,
    marginBottom: 20,
    flexDirection: 'row',
  },
  input: {
    height: 45,
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: Dimensions.get('window').width - 30,
    color: 'white',
    paddingHorizontal: 10,
    marginBottom: 20,

  },
  button: {
    width: Dimensions.get('window').width - 30,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 10,
  },
  TextSearch: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  }

})
export default DotaListScreen;