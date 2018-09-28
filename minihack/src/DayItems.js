import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
} from 'react-native';

class DayItems extends Component {
    state = {}
    timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
        var year = a.getFullYear();
        var month = a.getMonth();
        var date = a.getDate();
        var time = date + '/' + month + '/' + year;
        return time;
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.timeConverter(this.props.day.dt)}</Text>
                <View style={styles.temp}>
                    <Text style={styles.text}>{Math.floor(this.props.day.temp.day - 273)}</Text>
                    <Image
                        style={styles.image}
                        source={{ uri: 'http://sv1.upsieutoc.com/2018/09/15/clouds.png' }} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '5%',
        marginVertical: '3%',
        padding: '3%',
        backgroundColor: 'green',
        borderRadius: 5,
        alignItems: 'center',
    },
    temp: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
        marginRight: '3%',
    },
    image: {
        height: 50,
        width: 50,
    }
})
export default DayItems;