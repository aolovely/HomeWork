import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';

import Slider from "react-native-slider";
import { connect } from 'react-redux'

import { changeValue } from '../actions'

class ColorControl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initWidth: 365 / 255,
            positionText: 0,
        }
    }

    onValueChange = (value) => {
        this.props.changeValue({
            name: this.props.item.name,
            value: value
        })
        this.setState({ positionText: (value * this.state.initWidth) })

    }

    chooseColor = () => {
        switch (this.props.item.name) {
            case 'red': return 'red'
            case 'green': return 'green'
            case 'blue': return 'blue'
        }
    }


    render() {
        return (
            <View style={{ marginVertical: 15, marginHorizontal: 20 }}>
                <Text style={{ left: this.state.positionText }}>{this.props.item.value}</Text>
                <Slider
                    style={{ width: 365 }}
                    trackStyle={customStyles4.track}
                    thumbStyle={[customStyles4.thumb, { borderColor: this.chooseColor() }]}
                    minimumTrackTintColor={this.chooseColor()}
                    thumbTintColor={this.chooseColor()}
                    minimumValue={0}
                    maximumValue={255}
                    step={1}
                    onValueChange={this.onValueChange}
                />
            </View>
        );
    }
}

const customStyles4 = StyleSheet.create({
    track: {
        height: 10,
        borderRadius: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 1,
        shadowOpacity: 0.15,
    },
    thumb: {
        width: 20,
        height: 20,
        backgroundColor: 'white',
        borderWidth: 5,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.35,
    }
});
export default connect(null, { changeValue })(ColorControl);