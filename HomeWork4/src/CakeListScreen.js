import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList
} from 'react-native';
import CakeItem from './CakeItem';
import { data } from './database.json'

class CakeListScreen extends Component {
    state = {}

    renderItem = (data) => {
        return <CakeItem
            cake={data.item}
            navigation={this.props.navigation} />
    }

    render() {
        return (
            //<CakeItem></CakeItem>
            <FlatList
                data={data}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.title} />
        )
    }
}

export default CakeListScreen;