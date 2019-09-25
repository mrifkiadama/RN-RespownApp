import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, AsyncStorage } from 'react-native';
import AppNavigator from './route';


export default class App extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <AppNavigator/>
        )
    }
}

const styles = StyleSheet.create({

  })