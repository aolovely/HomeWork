import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';


class HeroDetailScreen extends Component {

    state = {}
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'rgb(41,41,41)', }}>
                <Text style={styles.text}>Tính năng hiện chưa có</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    text: {
        color: "white",
        fontStyle: 'italic',
        marginTop: 30,
        fontSize: 20,
    },
    textPlayer: {
        fontSize: 25,
        color: "white",
        marginTop: 30,
    }
})

export default HeroDetailScreen;