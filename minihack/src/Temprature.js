import React, { Component } from 'react';
import {
    Text, StyleSheet,
    View,
} from 'react-native';

class Temprature extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.num}>24</Text>
                <View style={styles.cf}>
                    <Text style={styles.text}>*C</Text>
                    <Text style={styles.text}>*F</Text>
                </View>
            </View>
        );
    }
}

export default Temprature;

const styles = StyleSheet.create({
    container: {
        marginTop: '12%',
    },
    num: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
    },
    cf: {
        flexDirection: 'row',
    },
    text: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginRight: '2%'
    }
})