import React, {Component} from 'react'
import {View, Text, Button, TextInput} from 'react-native'
import startMainTabs from '../maintabs/startMainTabs'
import Styles from '../../styles'

export default class AuthScreen extends Component {

    loginHandler = () => {
        startMainTabs()
    };

    render() {
        return (
            <View style={Styles.authContainer}>
                <Text>Please Log In</Text>
                <Button title={'Switch to Login'}/>
                <TextInput placeholder={'Your E-Mail Address'}/>
                <TextInput placeholder={'Password'}/>
                <TextInput placeholder={'Confirm Password'}/>
                <Button title={'Submit'} onPress={this.loginHandler}/>
            </View>
        )
    }
}
