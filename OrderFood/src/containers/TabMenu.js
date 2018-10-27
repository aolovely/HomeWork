import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import firebase from 'react-native-firebase'
import MenuItem from '../components/MenuItem'
import { primaryColorBrown, primaryColorRed, primaryColorGreen, backgroundColor, commonStyles } from '../styles'
class TabMenu extends Component {
    state = {
        currentCategory: 'Hamburger',
        dishes: []
    }
    loadData() {
        // console.log("loading")
        firebase.database().ref(`dishes/${this.state.currentCategory}`)
            .on('value', res => this.setState({ dishes: res._value }, () => console.log(this.state.dishes)))
        //.on('value', res => console.log(res))
        // .on la co che lang nghe lien tuc, database thay doi thi load lai data
    }
    componentDidMount() {
        this.loadData()
    }

    renderItemCategories = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                this.setState({ currentCategory: item },
                    () => this.loadData())
            }}
        >

            <Text style={[styles.itemCategories, {
                color: this.state.currentCategory === item
                    ? primaryColorRed : primaryColorGreen
            }]}>{item}</Text>
        </TouchableOpacity>
    )
    renderCategories = () => (
        <FlatList
            style={{ flexGrow: 0 }} // chi chon vao chu moi dc, khong bam o dau cung duoc
            data={['Hamburger', 'Pizza', 'Spaghetti', 'Salad', 'Drink', 'Snack']}
            renderItem={this.renderItemCategories}
            horizontal={true}
            keyExtractor={(item) => item}
            showsHorizontalScrollIndicator={false}
        />
    )


    renderItemMenu = ({ item }) => {
        return (
            <MenuItem item={item} />
        )
    }

    renderMenu = () => (

        <FlatList
            data={this.state.dishes}
            renderItem={this.renderItemMenu}
            keyExtractor={(item) => item}
            numColumns={2}
        />
    )


    render() {
        return (
            <View style={commonStyles.container}>
                {this.renderCategories()}
                {this.renderMenu()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
        // marginTop: 10
    },
    itemCategories: {
        fontWeight: 'bold',
        color: primaryColorGreen,
        fontSize: 20,
        marginRight: 15,
    }
});

export default TabMenu;