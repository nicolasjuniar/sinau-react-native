import {Navigation} from 'react-native-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import React from 'react-native'

const startTabs = () => {
    Promise.all([
        Icon.getImageSource('code', 30),
        Icon.getImageSource('gavel', 30),
        Icon.getImageSource('loyalty', 30)
    ]).then(icons => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: 'TestReactNative.FindPlaceScreen',
                    label: 'Find Place',
                    title: 'Find Place',
                    icon: icons[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: icons[2],
                                title: 'Menu',
                                id: 'sideDrawerToggle'
                            }
                        ]
                    }
                },
                {
                    screen: 'TestReactNative.SharePlaceScreen',
                    label: 'Share Place',
                    title: 'Share Place',
                    icon: icons[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: icons[2],
                                title: 'Menu',
                                id: 'sideDrawerToggle'
                            }
                        ]
                    }
                }
            ],
            drawer: {
                left: {
                    screen: 'TestReactNative.SideDrawer'
                }
            }
        });
    });
};

export default startTabs
