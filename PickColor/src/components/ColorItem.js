import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';

import { connect } from 'react-redux'

class ColorItem extends Component {
    state = {}
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: `rgb(${this.props.colorControlReducer[0].value},${this.props.colorControlReducer[1].value},${this.props.colorControlReducer[2].value})`, elevation: 3 }}></View>
        );
    }
}

const mapStateToProps = ({ colorControlReducer }) => ({ colorControlReducer })
export default connect(mapStateToProps)(ColorItem);