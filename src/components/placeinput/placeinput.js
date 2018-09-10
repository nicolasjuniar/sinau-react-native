import Styles from "../../styles";
import {Button, View} from "react-native";
import PropTypes from 'prop-types'
import React, {Component} from "react";
import DefaultInput from '../../customcomponent/defaultinput/DefaultInput'

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
            <View style={Styles.inputContainer}>
                <DefaultInput
                    placeholder={"An Awesome Place"}
                    value={this.state.placeName}
                    underlineColorAndroid={'#ff0'}
                    onChangeText={this.placeChangeNameHandler}
                />
                <Button
                    style={Styles.placeButton}
                    title={"Add"}
                    onPress={() => this.props.placeSubmitHandler(this.state.placeName)}/>
            </View>
        )
    }
}

