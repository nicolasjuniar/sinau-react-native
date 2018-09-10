import React from 'react'
import Styles from "../../styles";
import {TextInput} from "react-native";

const defaultInput = props => (
    <TextInput
        style={Styles.textInput}
        underlineColorAndroid={'transparent'}
        {...props}
    />
);

export default defaultInput
