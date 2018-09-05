import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './styles'
import PlaceInput from './components/placeinput/placeinput'
import PlaceList from './components/placelist/placelist'
import PlaceDetail from './components/placedetail/placedetail'
import {connect} from 'react-redux'
import {addPlace, deletePlace, deselectPlace, selectPlace} from "./store/actions";

type Props = {};

class App extends Component<Props> {

    state = {
        placeName: ""
    };

    placeAddedHandler = (placeName) => {
        this.props.onAddPlace(placeName)
    };

    placeDeletedHandler = () => {
        this.props.onDeletePlace()
    };

    modalClosedHandler = () => {
        this.props.onDeselectPlace()
    };

    placeSelectedHandler = key => {
        this.props.onSelectPlace(key)
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceDetail
                    selectedPlace={this.props.selectedPlace}
                    onItemDeleted={this.placeDeletedHandler}
                    onModalClosed={this.modalClosedHandler}
                />
                <PlaceInput
                    placeSubmitHandler={this.placeAddedHandler}/>
                <PlaceList
                    places={this.props.places}
                    onItemSelected={this.placeSelectedHandler}/>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places,
        selectedPlace: state.places.selectedPlace
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (name) => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: (key) => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)

