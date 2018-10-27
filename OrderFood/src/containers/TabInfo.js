import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import { primaryColorRed } from '../styles'
class TabInfo extends Component {
    state = {}
    render() {
        return (
            <View>
                <Text style={styles.titleStyle}>Infomation</Text>
                <View style={styles.infoStyle}>
                    <Image
                        style={styles.iconStyle}
                        source={require('../../imgs/ic_location.png')}
                    />
                    <Text style={styles.txtStyle}>22C - Thành Công - Ba Đình - Hà Nội</Text>
                </View>
                <View style={styles.infoStyle}>
                    <Image
                        style={styles.iconStyle}
                        source={require('../../imgs/ic_username.png')}
                    />
                    <Text style={styles.txtStyle}>Xuan Mario</Text>
                </View>
                <View style={styles.infoStyle}>
                    <Image
                        style={styles.iconStyle}
                        source={require('../../imgs/ic_phone_number.png')}
                    />
                    <Text style={styles.txtStyle}>0946716615</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: primaryColorRed,
        marginStart: 20,
        marginTop: 30
    },
    infoStyle: {
        flexDirection: 'row',
        margin: 15,
        marginStart: 40
    },
    iconStyle: {
        height: 16,
        width: 16
    },
    txtStyle: {
        marginStart: 20,
    }
});
export default TabInfo;