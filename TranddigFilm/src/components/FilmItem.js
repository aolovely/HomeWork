import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';

class FilmItem extends Component {
    state = {}
    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => this.props.navigation.navigate('ListDetail',
                    { info: this.props.item })} >

                <Image
                    style={styles.image}
                    source={{ uri: `https://image.tmdb.org/t/p/w500/${this.props.item.known_for[0].poster_path}` }}
                    resizeMode={'stretch'}
                />
                <View style={styles.preview}>
                    <Text style={styles.txtName}
                        numberOfLines={2}>{this.props.item.name}</Text>
                    <Text style={styles.txtDate}>Ratting: {this.props.item.known_for[0].vote_average}</Text>
                </View>


            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        // height: 270,
        width: Dimensions.get('window').width / 2,
        padding: 10,
        backgroundColor: '#D1D9DB'
    },
    image: {
        height: 210,
        borderRadius: 10,
    },
    preview: {
        backgroundColor: '#FAFBFC',
        borderRadius: 10,
        alignItems: 'center'
    },
    txtName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#595C6E'

    },
    txtDate: {
        fontSize: 13,
        marginVertical: 7,
        color: '#595C6E',
        fontWeight: 'bold',
        opacity: 0.8
    }
})

export default FilmItem;