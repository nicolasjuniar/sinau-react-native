import React from 'react'
import {TouchableOpacity, Text, View} from 'react-native'
import Style from '../../styles'

const ButtonWithBackground = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[Style.loginButton, {backgroundColor: props.color}]}>
            <Text>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

export default ButtonWithBackground
