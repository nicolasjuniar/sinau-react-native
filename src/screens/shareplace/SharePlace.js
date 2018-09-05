import React, {Component} from 'react'
import {View, Text} from 'react-native'
import PlaceInput from '../../components/placeinput/placeinput'
import {connect} from 'react-redux'
import {addPlace} from "../../store/actions";

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
                    side:'left',
                    animated: true
                });
            }
        }
    };


    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
        console.log('data yg masuk', placeName)
    };

    render() {
        return (
            <View>
                <PlaceInput placeSubmitHandler={this.placeAddedHandler}/>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen)
