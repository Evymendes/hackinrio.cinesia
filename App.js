import React, { Component } from 'react';
import {View, StyleSheet, Text } from 'react-native';

import MainStack from './src/router';

class App extends Component {
  state = {};

  render() {
    return (
      <MainStack />
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

export default  App;