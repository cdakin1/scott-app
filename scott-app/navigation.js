import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Ionicons from 'react-native-vector-icons/Ionicons'; // Supported builtin module
import Header from "./views/Header";
import Home from "./views/Home";
import Profile from "./views/Profile";
import News from "./views/News";
import MarketData from "./views/MarketData";
import Contact from "./views/Contact";
import Podcast from "./views/Podcast";

const HomeScreen = () => (
    <View>
        <Header title="Home" />
        <Home />
    </View>
);
const ProfileScreen = () => (
    <View>
        <Header title="Profile" />
        <Profile />
    </View>
);
const NewsScreen = () => (
    <View>
        <Header title="News" />
        <News />
    </View>
);
const MarketDataScreen = () => (
    <View>
        <Header title="Market Data" />
        <MarketData />
    </View>
);
const ContactScreen = () => (
    <View>
        <Header title="Contact" />
        <Contact />
    </View>
);
const PodcastScreen = () => (
    <View>
        <Header title="Podcast" />
        <Podcast />
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