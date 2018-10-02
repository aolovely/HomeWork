import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

class FilmItem extends Component {
    state = {}
    render() {
        return (
            <TouchableOpacity style={{ borderBottomWidth: 1 }}
                onPress={() => this.props.navigation.navigate('ListDetail',
                    { info: this.props.item })}
            >
                <View style={styles.container}>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500/${this.props.item.known_for[0].poster_path}` }}
                        style={styles.image}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.movieTitle} numberOfLines={2}>
                            {/* {this.props.item.name} */}
                            {this.props.item.known_for[0].original_title}
                        </Text>
                        <Text>
                            <Text style={styles.movieYear}>{this.props.item.known_for[0].release_date} </Text>
                            <Text style={{ color: 'green', fontSize: 15 }}> .Rating {this.props.item.known_for[0].vote_average}</Text>
                        </Text>
                    </View>
                </View>

            </TouchableOpacity >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'rgb(66, 62, 62)',
        flexDirection: 'row',
        padding: 8,

    },
    image: {
        height: 93,
        marginRight: 10,
        width: 60,
    },
    textContainer: {
        flex: 1,
    },
    movieTitle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 2,
    },
    movieYear: {
        color: '#999999',
        fontSize: 14,
    },
})
export default FilmItem;