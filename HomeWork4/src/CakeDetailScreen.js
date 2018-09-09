import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet,
} from 'react-native';
import CakeItem from './CakeItem';

class CakeDetailScreen extends Component {
    state = {}
    render() {
        return (
            <View>
                <CakeItem cake={this.props.navigation.getParam('cake')} />
                <View style={styles.container}>
                    <FlatList style={{ backgroundColor: 'rgb(239, 225, 225)', borderRadius: 10, paddingBottom: 20, }}
                        data={this.props.navigation.getParam('cake').cakes}
                        renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
                        keyExtractor={(item) => item} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    text: {
        fontSize: 20,
        color: 'red',
        marginLeft: 20,
        marginTop: 20,
    }
})
export default CakeDetailScreen;