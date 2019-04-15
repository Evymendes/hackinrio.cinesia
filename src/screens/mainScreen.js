//Libs
 import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { DrawerNavigator } from 'react-navigation'

class MainScreen extends Component {
  state = {};

  handleHealthPress = () => {
    this.props.navigation.navigate('Password');
  }

  render() {
    return (
      <View>
       <TouchableOpacity
        onPress={this.handleHealthPress}
        style={styles.buttonSaude}
        >
          <Text style={styles.buttonText}>saúde </Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.buttonViolencia}>
          <Text style={styles.buttonText}> violência </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {    
  buttonSaude: {
    width: '100%',    
    height: '50%',
    backgroundColor: '#00C14A',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
  },
  buttonViolencia: {
    width: '100%',
    height: '50%',
    backgroundColor: '#0076FF',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default MainScreen;