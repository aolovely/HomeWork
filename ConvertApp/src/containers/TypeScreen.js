import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import data from '../database.json'

import { dataList } from '../actions'
import { connect } from 'react-redux'

class TypeScreen extends Component {
    state = {}
    render() {
        return (
            <View>
                <View>
                    <TouchableOpacity style={[styles.container, styles.bgColor1]}
                        onPress={() => {
                            this.props.dataList(data.weight)
                        }}>
                        <Text style={styles.text}>Weight</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={[styles.container, styles.bgColor2]}
                        onPress={() => {
                            this.props.dataList(data.lenght)
                        }}>
                        <Text style={styles.text}>Length</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        paddingStart: 40,
        paddingVertical: 10,
    },
    bgColor1: {
        backgroundColor: '#ff8000',
    },
    bgColor2: {
        backgroundColor: '#ffa64d',
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400'
    }
})
export default connect(null, { dataList })(TypeScreen);