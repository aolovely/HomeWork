import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

import { connect } from 'react-redux'
import { primaryColorGreen, primaryColorRed } from '../styles'

import Icon from 'react-native-vector-icons/FontAwesome'
import firebase from 'react-native-firebase'

class IconAmount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ongoing: []
        }
    }

    componentDidMount() {
        // firebase.database().ref('/users')
        //     .child(firebase.auth().currentUser.uid)
        //     .child('history')
        //     .once('value', res => this.setState({
        //         ongoing: res._value.filter(order => order.onGoing === true)

        //     }))

    }
    render() {

        const total = (this.props.orders.length === 0) ? 0
            : this.props.orders.reduce(
                (accumulator, currentValue) => accumulator + currentValue.amount,
                0
            )

        firebase.database().ref('/users')
            .child(firebase.auth().currentUser.uid)
            .child('history')
            .once('value', res => this.setState({
                ongoing: res._value.filter(order => order.onGoing === true)

            }))
        return (
            <View>
                <Icon name={this.props.iconName} size={25} color={this.props.tintColor} />
                {(this.props.routeName === 'Order' && total !== 0) && <View
                    style={styles.textAmount}>
                    <Text style={styles.text}>{total}</Text>
                </View>
                }
                {(this.props.routeName === 'History' && this.state.ongoing !== null) && <View
                    style={styles.textAmount}>
                    <Text style={styles.text}>{this.state.ongoing.length}</Text>
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