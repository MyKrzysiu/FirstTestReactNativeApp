import React from 'react'
import { Component } from 'react';
import {Platform, StyleSheet, View, Text, FlatList, Alert, ActivityIndicator} from 'react-native';
import { Data } from '../api';

interface Props {
}

interface State {
    isLoading: boolean;
    dataSource: Array;
}

export default class CurrencyList extends Component<Props, State> {

    constructor(props){
        super(props);
        this.state = { isLoading: true, dataSource: []}
    }

    componentDidMount(){
        Data.getCurrencyList().then((data) => {
            this.setState({
                dataSource: data,
                isLoading: false
            });
        }).catch((e) => {
            Alert.alert(
                'Błąd',
                'Nie możemy pobrać danych, spróbuj później!',
            );
            this.state.isLoading = false;
        });
    }

    renderItem = ({item}) => (
        <Text>{item.name}: {item.price}zł</Text>
    );

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Kursy walut w stosunku do PLN</Text>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                />
                {this.state.isLoading ?
                    <View style={styles.loading}>
                        <ActivityIndicator color="#e72d4c" />
                    </View> : null
                }
            </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});