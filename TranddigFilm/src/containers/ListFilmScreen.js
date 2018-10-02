import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
} from 'react-native';

import axios from 'axios';

import { connect } from 'react-redux';

import FilmItem from '../components/FilmItem';
import ModalSelector from 'react-native-modal-selector'

class ListFilmScreen extends Component {

    renderItem = ({ item }) => {
        return <FilmItem item={item} navigation={this.props.navigation} />
    }

    render() {

        return (
            <View>
                <FlatList
                    data={this.props.dataFilm.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id.toString()} />

            </View>
        );
    }
}


const mapStateToProps = ({ dataFilm }) => ({ dataFilm })
export default connect(mapStateToProps)(ListFilmScreen);