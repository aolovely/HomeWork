import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import axios from 'axios';

import { connect } from 'react-redux';
import { dataFilm } from '../actions'

class ListFrist extends Component {

    static navigationOptions = {
        header: null,
    };

    creatData(type) {
        axios.get(`https://api.themoviedb.org/3/trending/person/${type}?api_key=3b01b28ca891cbd3be7ff0d9350412b2`)
            .then(res => {
                this.props.dataFilm({
                    data: res.data.results

                })
            })
            .catch(err => console.log(err))
        this.props.navigation.navigate('FilmsList')

    }

    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Trending Flim</Text>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        this.creatData('week')
                    }}>
                    <Text style={styles.TextSearch}>DAY</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        this.creatData('week')
                    }}>
                    <Text style={styles.TextSearch}>WEEK</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: 'rgb(41,41,41)',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white'

    },
    button: {
        width: Dimensions.get('window').width - 30,
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingVertical: 10,
        marginTop: 20,
    },
    TextSearch: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    }
})
export default connect(null, { dataFilm })(ListFrist);