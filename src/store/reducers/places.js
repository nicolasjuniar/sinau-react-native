import {ADD_PLACE, DESELECT_PLACE, DELETE_PLACE, SELECT_PLACE} from "../actions/actionTypes";
import placeImage from "../../assets/wisata.jpg";

const initialState = {
    places: [],
    selectedPlace: null
};

const placesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE: {
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    placeName: action.placeName,
                    placeImage: placeImage
                })
            };
        }
        case DELETE_PLACE: {
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.placeKey;
                }),
                selectedPlace: null
            }
        }
        case SELECT_PLACE: {
            return {
                ...state,
                selectedPlace: state.places.find(place => {
                    return place.key === action.placeKey
                })
            }
        }
        case DESELECT_PLACE: {
            return {
                ...state,
                selectedPlace: null
            }
        }
        default: {
            return state
        }
    }
};

export default placesReducer
