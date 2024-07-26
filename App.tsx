//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/router/rootNavigation';

// create a component
const MyComponent = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default MyComponent;
