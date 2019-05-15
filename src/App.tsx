import React from 'react'
import { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './components/Home'
import CurrencyList from './components/CurrencyList'

const AppNavigator = createStackNavigator(
    {
        Home: {screen: Home},
        CurrencyList: {screen: CurrencyList},
    },
    {
        initialRouteName: "Home"
    }
);

const AppContainer = createAppContainer(AppNavigator);

interface Props {};

export default class App extends React.Component<Props> {
    render() {
        return <AppContainer />;
    }
}