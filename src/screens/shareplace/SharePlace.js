import React, {Component} from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import PlaceInput from '../../components/placeinput/placeinput'
import {connect} from 'react-redux'
import {addPlace} from '../../store/actions'
import PickImage from '../../components/pickimage/PickImage'
import HeadingText from '../../customcomponent/headingtext/HeadingText'
import PickLocation from "../../components/picklocation/PickLocation";

class SharePlaceScreen extends Component {

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
    }

    onNavigatorEvent = event => {
        console.log(event);
        if (event.type === 'NavBarButtonPress') {
            if (event.id === 'sideDrawerToggle') {
                this.props.navigator.toggleDrawer({
                    side: 'left',
                    animated: true
                });
            }
        }
    };


    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName)
    };

    render() {
        return (
            <ScrollView>
                <View style={style.container}>
                    <HeadingText>Share a Place With us!</HeadingText>
                    <PickImage/>
                    <PickLocation/>
                    <PlaceInput placeSubmitHandler={this.placeAddedHandler}/>
                </View>
            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    placeholder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        width: '80%',
        height: 100
    },
    button: {
        margin: 8
    },
    previewImage: {
        height: '100%',
        width: '100%'
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen)
