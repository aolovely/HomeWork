import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';

import axios from 'axios';

class IdStreamDetailScreen extends Component {
    state = {
        data: [],
        dataImage: [],
        dataes: [],
        loading: true,
        unmouted: false,
    }

    componentDidMount() {
        !this.state.unmouted && axios.get('https://api.opendota.com/api/players/' + this.props.navigation.getParam('text'))
            .then((res) => this.setState({ data: res.data, dataImage: res.data.profile, dataes: res.data.mmr_estimate, }))
            .catch(err => console.log(err))
    }

    componentWillUnmount() {
        this.setState({ unmouted: true })
    }
    render() {
        return (
            <View style={{
                flex: 1, backgroundColor: 'rgb(41,41,41)', alignItems: "center",
                justifyContent: "center",
            }}>
                <View style={styles.viewImage}>
                    <Image
                        style={styles.image}
                        source={{ uri: this.state.dataImage.avatarfull }} />
                </View>
                <View style={styles.viewText}>
                    <Text style={styles.textPlayer}>Real Name: {this.state.dataImage.personaname}</Text>
                    <Text style={styles.text}> Solo competitive rank: {this.state.data.solo_competitive_rank}</Text>
                    <Text style={styles.text}> Competitive rank: {this.state.data.competitive_rank}</Text>
                    <Text style={styles.text}> Estimate:{this.state.dataes.estimate}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width - 30,
        height: 280,
        borderRadius: 10,
    },
    viewImage: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    viewText: {
        width: Dimensions.get('window').width - 30,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        flex: 1,
    },
    text: {
        color: "white",
        fontStyle: 'italic',
        marginTop: 30,
        fontSize: 20,
    },
    textPlayer: {
        fontSize: 25,
        color: "white",
        marginTop: 30,
    }
})

export default IdStreamDetailScreen;