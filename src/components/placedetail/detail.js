import React, {Component} from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import Styles from '../../styles'
import Icon from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux'
import {deletePlace} from "../../store/actions";

class DetailScreen extends Component {

    placeDeletedHandler = () => {
        this.props.onDeletePlace(this.props.selectedPlace.key);
        this.props.navigator.pop();
    };

    render() {
        let detailContent = null;
        if (this.props.selectedPlace) {
            detailContent = (
                <View>
                    <Image
                        source={this.props.selectedPlace.placeImage}
                        style={Styles.placeImageModal}/>
                    <Text style={Styles.placeNameModal}>{this.props.selectedPlace.placeName}</Text>
                </View>
            )
        }
        return (
            <View style={Styles.detailContainer}>
                {detailContent}
                <View>
                    <TouchableOpacity onPress={this.placeDeletedHandler}>
                        <View style={Styles.deleteButton}>
                            <Icon
                                size={30}
                                name={'ios-trash'}
                                color={'red'}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    }
};

export default connect(null, mapDispatchToProps)(DetailScreen)
