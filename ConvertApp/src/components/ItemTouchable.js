import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';

import { changeColorText } from '../actions'
import { changeValue } from '../actions'
import { connect } from 'react-redux'

class ItemTouchable extends Component {
    state = {}
    componentDidMount() {

    }



    render() {

        return (
            <View style={[styles.container, { backgroundColor: this.props.item.color }]}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.changeValue({
                            type: this.props.type,
                            value: this.props.item.value
                        })
                        this.props.changeColorText({
                            type: this.props.type,
                            index: this.props.item.id
                        })
                        console.log(this.props.colorText)
                    }}>
                    <Text style={[styles.text,
                    {
                        color: (this.props.type === 'left' ? this.props.colorText.left[this.props.item.id].value
                            : this.props.colorText.right[this.props.item.id].value) ? 'red' : 'white'
                    }]}>{this.props.item.name}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 2,
        paddingStart: 40,
        paddingVertical: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: '400'
    }
})


const mapStateToPropts = ({ value, colorText }) => ({ value, colorText });
export default connect(mapStateToPropts, { changeValue, changeColorText })(ItemTouchable);