import React, {Component} from 'react'
import {Button, Image, StyleSheet, View} from 'react-native'
import imagePlaceHolder from "../../assets/wisata.jpg";

export default class PickImage extends Component {
    render() {
        return (
            <View>
                <View style={style.placeholder}>
                    <Image source={imagePlaceHolder} style={style.previewImage}/>
                </View>
                <View style={style.button}>
                    <Button title={'Pick Image'} onPress={() => alert('eee')}/>
                </View>
            </View>
        )
    }
};

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
    },
});
