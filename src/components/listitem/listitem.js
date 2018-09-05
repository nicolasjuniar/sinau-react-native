import React, {Component} from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import styles from '../../styles'
import PropTypes from 'prop-types'

export default class  ListItem extends Component{
    static propTypes={
        onItemPressed: PropTypes.func.isRequired,
        placeName: PropTypes.string.isRequired
    };

    render(){
        return(
            <TouchableOpacity onPress={this.props.onItemPressed}>
                <View style={styles.listItem}>
                    <Image source={ this.props.placeImage} style={styles.placeImage}/>
                    <Text>{this.props.placeName}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

