import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
} from 'react-native';
import DayItems from './DayItems';

import axios from 'axios';

class DayList extends Component {
    state = {
        data: [],
    }

    renderItem = (data) => {
        console.log(data)
        return <DayItems day={data.item} />
    }

    componentDidMount() {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.props.name}&appid=927d09bc49dbee6aac7f5cb1df707542`)
            .then((res) => this.setState({ data: res.data.list }))
            //.then((res) => console.log(res.data.list))
            .catch((err) => console.log(err))

        // this.setState({ data: this.state.data.splice(0, 1) })
    }



    render() {
        return (
            <View style={{ marginTop: "10%" }}>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem} />
            </View>

        );
    }
}

export default DayList;