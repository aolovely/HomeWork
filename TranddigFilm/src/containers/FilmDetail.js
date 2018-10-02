import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';

class FilmDetail extends Component {
    state = {
        info: this.props.navigation.getParam('info')
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.mainSection}>
                    <View><Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500/${this.state.info.known_for[0].backdrop_path}` }}
                        style={styles.image}
                    /></View>
                    <View style={styles.rightPanel}>
                        <View><Text style={styles.movieTitle}>{this.state.info.known_for[0].original_title}</Text></View>
                        <Text style={styles.date}>{this.state.info.known_for[0].release_date}</Text>
                        <Text style={styles.mpaaText}>Country: EN</Text>
                        <Text style={styles.ratingTitle}>Ratting:</Text>
                        <Text style={{
                            fontWeight: "300",
                            fontSize: 16
                        }}>{this.state.info.known_for[0].vote_average}</Text>
                    </View>
                </View>
                <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 16, borderTopWidth: 1, paddingTop: 20 }}>{this.state.info.known_for[0].overview}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'rgb(73, 65, 65)',
        flex: 1
    },
    mainSection: {
        flexDirection: 'row',
    },
    image: {
        width: 134,
        height: 200,
        marginRight: 10,
    },
    rightPane: {

        // flex: 1,
    },
    movieTitle: {
        fontSize: 20,
        fontWeight: "500",
    },
    date: {
        fontWeight: "500",
        fontSize: 20,
        marginTop: 15
    },
    mpaaText: {
        marginTop: 20,
        fontFamily: 'Palatino',
        fontSize: 20,
        fontWeight: "500",
    },
    ratingTitle: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: "500",
    },

})
export default FilmDetail;