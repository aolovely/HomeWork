import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput
} from 'react-native';
import { primaryColorRed, primaryColorGreen } from '../styles'

import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/FontAwesome'

class InfoItem extends Component {
    state = {}
    componentDidMount() {
        this.loadData()
    }

    loadData() {
        //neu co roi thi lay ve k co thi tu tao ra nhanh moi la user
        firebase.database().ref('/users')
            //truy cap vao ben trong co 2 cach cach 1 viet han ten duong dan ben tren nhu tabmenu
            //ce dung child
            .child(firebase.auth().currentUser.uid)
            .child(this.props.type)
            .once('value', res => this.setState({
                info: res._value
            }))
    }
    onSubmit = (event) => {
        //day data len firebase
        console.log(event.nativeEvent.text)
        firebase.database().ref('/users')
            .child(firebase.auth().currentUser.uid)
            .child(this.props.type)
            .set(event.nativeEvent.text)
    }
    render() {
        return (
            <View style={styles.container}>
                <Icon name={this.props.iconName} size={25} color={primaryColorGreen} />
                <TextInput style={{ flex: 1, color: primaryColorGreen, marginLeft: 16 }}
                    placeholder={'enter your info'}
                    placeholderTextColor={primaryColorGreen}
                    //nhan enter thay doi text 
                    returnKeyLabel={'Done'}
                    //  returnKeyType={'done'}
                    onSubmitEditing={this.onSubmit}
                    defaultValue={this.state.info} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 7,
        marginVertical: 5
    }
})
export default InfoItem;