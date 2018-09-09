import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';

class CakeItem extends Component {
    state = {}
    render() {
        return (
            <TouchableOpacity style={{ padding: 10, width: Dimensions.get('window').width, }}
                onPress={() => this.props.navigation.navigate('CakeDetail', {
                    cake: this.props.cake,
                })}>
                <View style={[styles.container, { backgroundColor: this.props.cake.backgroundColor }]}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                        <Image
                            style={{ width: 100, height: 100, borderRadius: 10, }}
                            source={{ uri: this.props.cake.photos }} />
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={styles.text}> {this.props.cake.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        flexDirection: 'row',
        borderRadius: 10,
    },

    text: {
        fontSize: 25,
        color: 'white',
    }
})
export default CakeItem;