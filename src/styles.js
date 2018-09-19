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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
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
        flex: 1,
        paddingTop: 30
    },
    authContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    authInputContainer: {
        width: '80%'
    },
    textInput: {
        width: '70%',
        borderWidth: 1,
        borderColor: '#bbb',
        padding: 5,
        margin: 8,
        backgroundColor: '#eee'
    },
    loginHeaderText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black'
    },
    loginBackgroundImage: {
        flex: 1,
        width: '100%'
    },
    loginButton: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default styles
