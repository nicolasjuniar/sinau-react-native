import React, {Component} from 'react'
import {Button, StyleSheet, Text, View} from "react-native";

export default class PickLocation extends Component {
    render() {
        return (
            <View>
                <View style={style.placeholder}>
                    <Text>Map</Text>
                </View>
                <View style={style.button}>
                    <Button title={'Locate Me'}/>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    placeholder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        width: '80%',
        height: 100
    },
    button: {
        margin: 8
    }
});
