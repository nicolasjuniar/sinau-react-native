import {Navigation} from 'react-native-navigation'
import AuthScreen from './src/screens/auth/AuthScreen'
import SharePlaceScreen from './src/screens/shareplace/SharePlace'
import FindPlaceScreen from './src/screens/findplace/FindPlace'
import {Provider} from 'react-redux'
import configureStore from './src/store/configureStore'
import DetailScreen from "./src/components/placedetail/detail";
import SideDrawer from './src/components/sidedrawer/SideDrawer'

const store = configureStore();

//Register Screen
Navigation.registerComponent('TestReactNative.AuthScreen', () => AuthScreen, store, Provider);
Navigation.registerComponent('TestReactNative.SharePlaceScreen', () => SharePlaceScreen, store, Provider);
Navigation.registerComponent('TestReactNative.FindPlaceScreen', () => FindPlaceScreen, store, Provider);
Navigation.registerComponent('TestReactNative.DetailScreen', () => DetailScreen, store, Provider);
Navigation.registerComponent('TestReactNative.SideDrawer', () => SideDrawer);

//Start an App
Navigation.startSingleScreenApp({
    screen: {
        screen: 'TestReactNative.AuthScreen',
        title: 'Login'
    }
});
