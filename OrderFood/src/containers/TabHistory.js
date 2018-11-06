import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList
} from 'react-native';
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/FontAwesome'
import { commonStyles, primaryColorGreen, primaryColorBrown, primaryColorRed } from '../styles'

import Accordion from 'react-native-collapsible/Accordion';
import OrderItem from '../components/OrderItem';
class TabHistory extends Component {
    state = {
        activeSections: [],
        history: [],
        historyFinished: []

    }

    loadData() {
        firebase.database().ref('/users')
            .child(firebase.auth().currentUser.uid)
            .child('history')
            .once('value', res => this.setState({
                history: res._value.filter(order => order.onGoing === true),
                historyFinished: res._value.filter(order => order.onGoing === false)
            }))
    }
    componentDidMount() {
        this.loadData()
    }

    renderHeader(section) {
        const totalPrice = section.orders.reduce((accumulator, currentValue) => accumulator + currentValue.unitPrice * currentValue.amount, 0)
        return <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{
                flex: 1,
                color: primaryColorBrown,
                fontSize: 16,
                marginHorizontal: 7,
                marginVertical: 7,
            }}
                numberOfLines={1}>{section.date}</Text>

            <Text style={{
                // flex: 1,
                color: primaryColorRed,
                fontSize: 16,
                marginHorizontal: 7,
                fontWeight: 'bold',
                marginVertical: 7
            }}>{totalPrice}$</Text>

            <Icon style={{ marginEnd: 7 }}
                name='angle-down'
                size={20}
                color={primaryColorBrown} />
        </View>
    }

    renderContent = (section) => {
        return <FlatList
            style={{ flexGrow: 0 }}
            data={section.orders}
            renderItem={({ item }) => <OrderItem item={item} historyMode={true} />}
            keyExtractor={(item) => item.name}
        />
    }
    renderOngoingList = () => {
        return <View>
            <Text style={styles.title}>On-going</Text>
            <Accordion
                underlayColor={'white'}
                activeSections={this.state.activeSections}
                sections={this.state.history}

                renderHeader={this.renderHeader}
                renderContent={this.renderContent}
                onChange={(activeSections) => this.setState({ activeSections })}
            />
        </View>
    }

    renderFinishedList = () => {
        return <View>
            <Text style={styles.title}>Finished</Text>
            <Accordion
                underlayColor={'white'}
                activeSections={this.state.activeSections}
                sections={this.state.historyFinished}

                renderHeader={this.renderHeader}
                renderContent={this.renderContent}
                onChange={(activeSections) => this.setState({ activeSections })}
            />
        </View>
    }
    render() {
        return (
            <View style={commonStyles.screenContainer}>
                <Text style={commonStyles.screenTitle}>TabHistory</Text>
                {this.renderOngoingList()}
                {this.renderFinishedList()}

            </View>
        );
    }
}
const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: primaryColorGreen,
        marginVertical: 7,
        marginHorizontal: 7,
        fontWeight: 'bold'
    }
})
export default TabHistory;