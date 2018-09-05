import React, {Component} from 'react'
import {View, Text, Dimensions} from 'react-native'
import Styles from '../../styles'

export default class SideDrawer extends Component {
    render() {
        return (
            <View style={[Styles.sideDrawerContainer,{
                width: Dimensions.get('window').width * 0.8
            }]}>
                <Text>Iki Set Drewer</Text>
            </View>
        )
    }
}

