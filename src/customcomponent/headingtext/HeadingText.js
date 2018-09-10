import React from 'react'
import {Text, StyleSheet} from 'react-native'
import Styles from '../../styles'

const HeadingText = props => (
    <Text {...props} style={[Styles.loginHeaderText, props.style]}>{props.children}</Text>
);

export default HeadingText
