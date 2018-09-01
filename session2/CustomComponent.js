import { View, Text, StyleSheet, Image } from 'react-native';
import React, { Component } from 'react';
class Custom extends Component {
    state = {}
    render() {
        return (
            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around', flex: 1, }}>
                <Text style={{ color: 'white', }}>{this.props.name1}</Text>
                <Image
                    source={{ uri: this.props.imageUri1 }}
                    style={{ width: 40, height: 20, }}
                />
                <Image
                    source={{ uri: this.props.imageUri }}
                    style={{ width: 40, height: 20, }}
                />
                <Text style={{ color: 'white', }}>{this.props.name2}</Text>
            </View>
        );
    }
}

export default Custom;