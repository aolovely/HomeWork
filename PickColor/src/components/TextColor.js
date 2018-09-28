import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

import { connect } from 'react-redux'

class TextColor extends Component {
    state = {}
    render() {
        return (
            <View style={{ backgroundColor: '#ECEFF1', elevation: 2 }}>
                <Text style={{ fontSize: 20, marginHorizontal: 20, marginVertical: 20, }}>
                    {`rgb (${this.props.colorControlReducer[0].value}, ${this.props.colorControlReducer[1].value}, ${this.props.colorControlReducer[2].value})`}
                </Text>
            </View>
        );
    }
}

const mapStateToProps = ({ colorControlReducer }) => ({ colorControlReducer })
export default connect(mapStateToProps)(TextColor);