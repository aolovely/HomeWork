import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import OrderItem from '../components/OrderItem';

import { commonStyles, primaryColorBrown, primaryColorRed } from '../styles'

class TabOrder extends Component {
    state = {
    }

    renderTitle = () => <Text style={commonStyles.screenTitle}>Order</Text>

    renderOrders = () => <FlatList
        style={{ flexGrow: 0 }}
        data={this.props.orders}
        renderItem={({ item }) => <OrderItem item={item} />}
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

    renderConfirm = () => <TouchableOpacity
        style={{
            position: 'absolute',
            bottom: 16,
            backgroundColor: primaryColorRed,
            alignSelf: 'center',
            padding: 16,
            borderRadius: 10,
            marginBottom: 2
        }}>
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
export default connect(mapStateToProps)(TabOrder);