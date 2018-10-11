import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Dimensions,
    FlatList
} from 'react-native';

import { connect } from 'react-redux'

import { lenght, Weight } from '../database.json'
import ItemTouchable from '../components/ItemTouchable';

class ConvertScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textLeft: 0,
            textRight: 0,
            check: true
        }
    }


    renderItemLeft = ({ item }) => {
        return <ItemTouchable item={item} type='left' />
    }
    renderItemRight = ({ item }) => {
        return <ItemTouchable item={item} type='right' />
    }
    render() {

        var resLeft = parseInt(this.state.textLeft) * this.props.value.left / this.props.value.right
        var resRight = parseInt(this.state.textRight) * this.props.value.right / this.props.value.left
        return (
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.container}>
                        <TextInput
                            style={styles.textinput}
                            textAlign={'center'}
                            underlineColorAndroid={'#ff8000'}
                            onChangeText={(text) => this.setState({
                                textLeft: text === '' ? 0 : parseInt(text),
                                check: true
                            })}
                            value={this.state.check ? this.state.textLeft.toString() : resLeft.toString()}
                        />
                    </View>

                    <View style={styles.container}>
                        <TextInput
                            style={styles.textinput}
                            textAlign={'center'}
                            underlineColorAndroid={'#ff8000'}
                            onChangeText={(text) => this.setState({
                                textRight: text === '' ? 0 : parseInt(text),
                                check: false
                            })}
                            value={this.state.check ? resLeft.toString() : this.state.textRight.toString()}
                        />
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <FlatList
                        data={this.props.dataList}
                        renderItem={this.renderItemLeft}
                        keyExtractor={(item) => item.value.toString()} />

                    <FlatList
                        data={this.props.dataList}
                        renderItem={this.renderItemRight}
                        keyExtractor={(item) => item.value.toString()} />
                </View >

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 2,
    },
    textinput: {
        marginHorizontal: 20,
        marginVertical: 10,
        height: 60,
        fontSize: 24,
        color: 'black',
        width: Dimensions.get('window').width / 2 - 40,
    }
})

const mapStateToProps = ({ dataList, value }) => ({ dataList, value })
export default connect(mapStateToProps)(ConvertScreen);