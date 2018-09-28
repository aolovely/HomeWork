import React, { Component } from 'react';
import {
    Text, StyleSheet,
    View,
} from 'react-native';

class CurrentDay extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.city}>{this.props.name}</Text>
                <Text style={styles.day}>{this.props.dt}</Text>
            </View>
        );
    }
}

export default CurrentDay;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',

    },
    city: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    day: {
        fontSize: 20,
        color: 'white'
    }
})