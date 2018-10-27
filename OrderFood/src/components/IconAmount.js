import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

import { connect } from 'react-redux'
import { primaryColorGreen, primaryColorRed } from '../styles'

import Icon from 'react-native-vector-icons/FontAwesome'

class IconAmount extends Component {
    state = {}

    render() {

        const total = (this.props.orders.length === 0) ? 0
            : this.props.orders.reduce(
                (accumulator, currentValue) => accumulator + currentValue.amount,
                0
            )
        return (
            <View>
                <Icon name={this.props.iconName} size={25} color={this.props.tintColor} />
                {(this.props.routeName === 'Order' && total !== 0) && <View
                    style={styles.textAmount}>
                    <Text style={styles.text}>{total}</Text>
                </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textAmount: {
        position: 'absolute',
        backgroundColor: primaryColorRed,
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        left: 15
    },
    text: {
        color: 'white',
        fontSize: 12
    }
})

const mapStateToProps = ({ orders }) => ({ orders })
export default connect(mapStateToProps)(IconAmount);