import { View, Text, StyleSheet, Image } from 'react-native';
import React, { Component } from 'react';
class Schedule extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textFirst}>{this.props.schedule.title}</Text>
                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around', flex: 1, }}>
                    <Text style={{ color: 'white', }}>{this.props.schedule.name1}</Text>
                    <Image
                        source={{ uri: this.props.schedule.photos[0] }}
                        style={{ width: 40, height: 20, }}
                    />
                    <Image
                        source={{ uri: this.props.schedule.photos[1] }}
                        style={{ width: 40, height: 20, }}
                    />
                    <Text style={{ color: 'white', }}>{this.props.schedule.name2}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 18,
        borderRadius: 10,
        width: 350,
        height: 70,
        backgroundColor: 'rgb(47, 78, 94)',
    },
    textFirst: {
        marginTop: 3,
        alignSelf: 'center',
    },
})
export default Schedule;