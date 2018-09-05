import React from 'react'
import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    placeInput: {
        width: '70%'
    },
    placeButton: {
        width: '30%'
    },
    listContainer: {
        width: '100%'
    },
    listItem: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#eee',
        alignItems: 'center',
        flexDirection: 'row',
    },
    placeImage: {
        marginRight: 8,
        width: 50,
        height: 50
    },
    modalContainer: {
        margin: 22
    },
    placeImageModal: {
        width: '100%',
        height: 200
    },
    placeNameModal: {
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28
    },
    deleteButton: {
        alignItems: 'center'
    },
    detailContainer: {
        margin: 22
    },
    sideDrawerContainer: {
        backgroundColor: 'white',
        flex: 1
    },
    authContainer:{
        borderColor:'red',
        borderWidth: 1
    }

});

export default styles
