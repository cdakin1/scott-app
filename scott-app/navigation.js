import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Ionicons from 'react-native-vector-icons/Ionicons'; // Supported builtin module
import Home from "./views/Home";

const HomeScreen = () => (
    <Home />
);
const ProfileScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
    </View>
);
const NewsScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>News Screen</Text>
    </View>
);
const MarketDataScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Market Data Screen</Text>
    </View>
);
const ContactScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Contact Screen</Text>
    </View>
);
const PodcastScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Podcast Screen</Text>
    </View>
);

const RootTabs = TabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-home' : 'ios-home-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-person' : 'ios-person-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    News: {
        screen: NewsScreen,
        navigationOptions: {
            tabBarLabel: 'News',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-paper' : 'ios-paper-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    MarketData: {
        screen: MarketDataScreen,
        navigationOptions: {
            tabBarLabel: 'MarketData',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-pulse' : 'ios-pulse-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    Contact: {
        screen: ContactScreen,
        navigationOptions: {
            tabBarLabel: 'Contact',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-mail' : 'ios-mail-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    Podcast: {
        screen: PodcastScreen,
        navigationOptions: {
            tabBarLabel: 'Podcast',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-mic' : 'ios-mic-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    }
});

export default RootTabs;