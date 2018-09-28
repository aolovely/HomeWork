import React, { Component } from 'react';
import {
    Text, Image, StyleSheet,
    View,
} from 'react-native';

class CurrentImage extends Component {
    state = {}
    render() {
        return (
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: 'http://sv1.upsieutoc.com/2018/09/15/clouds.png' }}
                />
                <Text style={styles.status}>light rain</Text>
            </View>

        );
    }
}

export default CurrentImage;

const styles = StyleSheet.create({
    // container: {

    // },
    image: {
        height: 150,
        width: 150,
    },
    status: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    }
})