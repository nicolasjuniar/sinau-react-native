import React, {Component} from 'react'
import {View, Text, Dimensions, TouchableOpacity, StyleSheet} from 'react-native'
import Styles from '../../styles'
import Icon from 'react-native-vector-icons/Ionicons'

export default class SideDrawer extends Component {
    render() {
        return (
            <View style={[Styles.sideDrawerContainer, {
                width: Dimensions.get('window').width * 0.8
            }]}>
                <TouchableOpacity>
                    <View style={styles.drawerItem}>
                        <Icon name={'ios-log-out'} size={30} color={'#aaa'} style={styles.drawerIcon}/>
                        <Text>Metu</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#eee',
        marginTop: 30
    },
    drawerIcon: {
        marginRight: 10
    }
});
