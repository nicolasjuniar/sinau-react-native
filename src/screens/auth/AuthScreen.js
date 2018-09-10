import React, {Component} from 'react'
import {ImageBackground, View} from 'react-native'
import startMainTabs from '../maintabs/startMainTabs'
import Styles from '../../styles'
import DefaultInput from '../../customcomponent/defaultinput/DefaultInput'
import HeadingText from '../../customcomponent/headingtext/HeadingText'
import backgroundImage from '../../assets/example_background.jpg'
import ButtonWithBackground from '../../customcomponent/buttonwithbackground/ButtonWithBackground'

export default class AuthScreen extends Component {

    loginHandler = () => {
        startMainTabs()
    };

    render() {
        return (
            <ImageBackground style={Styles.loginBackgroundImage} source={backgroundImage}>
                <View style={Styles.authContainer}>
                    <HeadingText>Please Log In</HeadingText>
                    <ButtonWithBackground color={'#29aaf4'}>Switch to Login</ButtonWithBackground>
                    <View style={Styles.authInputContainer}>
                        <DefaultInput placeholder={'Your E-Mail Address'}/>
                        <DefaultInput placeholder={'Password'}/>
                        <DefaultInput placeholder={'Confirm Password'}/>
                    </View>
                    <ButtonWithBackground color={'#29aaf4'} onPress={this.loginHandler}>Submit</ButtonWithBackground>
                </View>
            </ImageBackground>
        )
    }
}
