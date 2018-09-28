import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Slider,
    FlatList,
} from 'react-native';

import Slider2 from "react-native-slider";
import { connect } from 'react-redux'

import ColorControl from '../components/ColorControl';
import TextColor from '../components/TextColor';
import ColorItem from '../components/ColorItem';

class ListScreen extends Component {

    renderItem = ({ item }) => (
        <ColorControl item={item} />
    )
    render() {
        return (
            <View style={styles.container}>
                <ColorItem />
                <View style={{ flex: 1 }}>
                    <TextColor />
                    <FlatList
                        data={this.props.colorControlReducer}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => item.name}
                        showsHorizontalScrollIndicator={false} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const mapStateToProps = (store) => ({ colorControlReducer: store.colorControlReducer })
export default connect(mapStateToProps)(ListScreen);