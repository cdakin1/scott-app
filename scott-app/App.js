import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootTabs from "./navigation";

export default class App extends React.Component {
    render() {
        return (
            <RootTabs />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});