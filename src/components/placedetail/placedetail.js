import React from 'react'
import {Modal, View, Image, Text, Button, TouchableOpacity} from 'react-native'
import Styles from '../../styles'
import Icon from 'react-native-vector-icons/Ionicons'

const PlaceDetail = props => {
    let modalContent = null;
    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image
                    source={props.selectedPlace.placeImage}
                    style={Styles.placeImageModal}/>
                <Text style={Styles.placeNameModal}>{props.selectedPlace.placeName}</Text>
            </View>
        )
    }
    return (
        <Modal
            onRequestClose={props.onModalClosed}
            visible={props.selectedPlace !== null}
            animationType={'slide'}
            transparent={false}>
            <View style={Styles.modalContainer}>
                {modalContent}
                <View>
                    <TouchableOpacity onPress={props.onItemDeleted}>
                        <View style={Styles.deleteButton}>
                            <Icon
                                size={30}
                                name={'ios-trash'}
                                color={'red'}/>
                        </View>
                    </TouchableOpacity>
                    <Button
                        title={'close'}
                        onPress={props.onModalClosed}
                    />
                </View>
            </View>
        </Modal>
    );
}

export default PlaceDetail
