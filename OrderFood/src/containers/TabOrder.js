import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import { clearOrder } from '../actions'
import OrderItem from '../components/OrderItem';

import { commonStyles, primaryColorBrown, primaryColorRed } from '../styles'
import firebase from 'react-native-firebase';

class TabOrder extends Component {
    state = {
    }

    renderTitle = () => <Text style={commonStyles.screenTitle}>Order</Text>

    renderOrders = () => <FlatList
        style={{ flexGrow: 0 }}
        data={this.props.orders}
        renderItem={({ item }) => <OrderItem item={item} historyMode={false} />}
        keyExtractor={item => item.name} />

    renderTotal = () => {
        total = (this.props.orders.length === 0)
            ? 0
            : this.props.orders.reduce(
                (accumulator, currentValue) => accumulator + currentValue.unitPrice * currentValue.amount, 0
            )
        return <View>
            <View style={{
                marginTop: 10,
                marginVertical: 16,
                borderTopWidth: 1,
                borderTopColor: primaryColorBrown
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[commonStyles.screenTitle, { flex: 1 }]}>Total</Text>
                    <Text style={commonStyles.screenTitle}>{total}$</Text>
                </View>
            </View>
        </View>
    }

    confirmOrder = () => {
        if (this.props.orders.length === 0) return;
        const dbRef = firebase.database().ref('/users')
            .child(firebase.auth().currentUser.uid)
            .child('history')

        dbRef.once('value', res => {
            const currentTime = new Date().toString()
            const currentOrder = {
                onGoing: true,
                orders: this.props.orders,
                date: currentTime.substring(0, currentTime.indexOf('GMT'))
            }

            res._value !== null
                ? dbRef.set([...res._value, currentOrder]).then(this.confirmSuccessful)
                : dbRef.set([currentOrder]).then(this.confirmSuccessful)
        })
    }

    confirmSuccessful = () => {
        this.props.clearOrder()
        this.props.navigation.navigate('History')
    }
    renderConfirm = () => <TouchableOpacity
        style={{
            position: 'absolute',
            bottom: 16,
            backgroundColor: this.props.orders.length !== 0 ? primaryColorRed : 'gray',
            alignSelf: 'center',
            padding: 16,
            borderRadius: 10,
            marginBottom: 2
        }}
        onPress={this.confirmOrder}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Confirm</Text>
    </TouchableOpacity>

    render() {
        return (
            <View style={commonStyles.screenContainer}>
                {this.renderTitle()}
                {this.renderOrders()}
                {this.renderTotal()}
                {this.renderConfirm()}
            </View>
        );
    }
}
const mapStateToProps = ({ orders }) => ({ orders })
export default connect(mapStateToProps, { clearOrder })(TabOrder);