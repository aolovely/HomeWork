import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'
import { delOrder } from '../actions'

import Icon from 'react-native-vector-icons/FontAwesome'

import { primaryColorGreen, primaryColorRed, primaryColorBrown } from '../styles'

class OrderItem extends Component {
    state = {}
    render() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
                <TouchableOpacity
                    onPress={() => this.props.delOrder(this.props.item.name)}>
                    <Icon name="trash"
                        size={25} color={primaryColorGreen}
                        style={{ marginHorizontal: 4 }}></Icon>
                </TouchableOpacity>
                <Text style={styles.amount}>{this.props.item.amount}</Text>
                <Text style={{
                    color: primaryColorBrown,
                    marginHorizontal: 8,
                    flex: 1
                }}>{this.props.item.name}</Text>
                <Text style={styles.price}>{this.props.item.unitPrice * this.props.item.amount}$</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    amount: {
        color: primaryColorBrown,
        fontWeight: 'bold',
        marginHorizontal: 7,
        fontSize: 18
    },
    price: {
        color: primaryColorGreen,
        fontWeight: 'bold',
        marginHorizontal: 7,
        fontSize: 18,
    }
})
export default connect(null, { delOrder })(OrderItem);