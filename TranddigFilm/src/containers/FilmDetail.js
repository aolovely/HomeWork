import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions
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
                        <View style={styles.viewbutton}><Text style={styles.date}>{this.state.info.known_for[0].release_date}</Text></View>

                        <View style={[{ marginTop: 18 }, styles.viewbutton]}><Text style={styles.mpaaText}>Country: EN</Text></View>

                        <View style={[{ marginTop: 18 }, styles.viewbutton]}><Text style={styles.ratingTitle}>Ratting: {this.state.info.known_for[0].vote_average}</Text></View>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ borderColor: '#51A9DC', marginTop: 20, fontWeight: 'bold', fontSize: 20, borderTopWidth: 1, paddingTop: 20, color: '#595C6E', }}>{this.state.info.name}</Text>

                    <Text style={{ borderColor: '#595C6E', marginTop: 20, fontWeight: 'bold', fontSize: 16, borderTopWidth: 1, paddingTop: 20, borderStyle: 'dashed', color: '#595C6E', opacity: 0.8 }}>{this.state.info.known_for[0].overview}</Text>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#FAFBFC',
        flex: 1
    },
    mainSection: {
        flexDirection: 'row',
    },
    image: {
        width: Dimensions.get('window').width / 2,
        height: 300,
        marginRight: 10,
        borderRadius: 10,
    },
    rightPane: {
        //  flex: 1,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20
    },
    movieTitle: {
        fontSize: 20,
        fontWeight: "500",
    },
    viewbutton: {
        width: 160,
        borderWidth: 1,
        borderColor: '#51A9DC',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        flex: 1,
    },
    date: {
        color: '#595C6E',
        fontWeight: "500",
        fontSize: 20,
    },
    mpaaText: {
        color: '#595C6E',
        fontFamily: 'Palatino',
        fontSize: 20,
        fontWeight: "500",
        color: '#595C6E',
    },
    ratingTitle: {
        color: '#595C6E',
        fontSize: 20,
        fontWeight: "500",
    },

})

export default FilmDetail;