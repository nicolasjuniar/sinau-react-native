import ListItem from "../listitem/listitem";
import React from "react";
import PropTypes from 'prop-types'
import styles from "../../styles";
import {FlatList} from "react-native";

const PlacesList = props => {
    return (
        <FlatList
            style={styles.listContainer}
            data={props.places}
            renderItem={info => (
                <ListItem
                    placeName={info.item.placeName}
                    placeImage={info.item.placeImage}
                    onItemPressed={() => props.onItemSelected(info.item.key)}/>
            )}
            keyExtractor = { (info, index) => index.toString() }
        />
    )
};

PlacesList.propTypes = {
    places: PropTypes.array.isRequired,
    onItemSelected: PropTypes.func.isRequired
};

export default PlacesList
