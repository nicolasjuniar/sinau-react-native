import styles from "../../styles";
import {Button, TextInput, View} from "react-native";
import PropTypes from 'prop-types'
import React, {Component} from "react";

export default class PlaceInput extends Component {

    state = {
        placeName: ""
    };

    placeChangeNameHandler = val => {
        this.setState({
            placeName: val
        })
    };

    static propTypes = {
        placeSubmitHandler: PropTypes.func.isRequired
    };

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInput}
                    placeholder={"An Awesome Place"}
                    value={this.state.placeName}
                    underlineColorAndroid={'#ff0'}
                    onChangeText={this.placeChangeNameHandler}
                />
                <Button
                    style={styles.placeButton}
                    title={"Add"}
                    onPress={()=>this.props.placeSubmitHandler(this.state.placeName)}/>
            </View>
        )
    }
}
