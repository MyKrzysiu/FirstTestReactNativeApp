import React from 'react'
import { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';

interface Props {
    navigation: any
}

export default class Home extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={ require('../assets/images/logo_kobs.png') } />
                <Text style={styles.welcome}>Welcome to KOBS</Text>
                <Text style={styles.welcome}>first React Native app!</Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('CurrencyList')}
                    style={styles.checkCurrencyButton}
                >
                    <Text style={styles.checkCurrencyButtonText}>Sprawdź kurs PLN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
    },
    logo: {
        justifyContent: 'center',
        marginBottom: 10,
    },
    checkCurrencyButton: {
        backgroundColor: '#e72d4c',
        alignItems: 'center',
        marginTop: 50,
        padding: 10
    },
    checkCurrencyButtonText: {
        color: 'white',
        fontSize: 24
    }
});
