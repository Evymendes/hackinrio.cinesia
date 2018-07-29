import React from 'react';
import { 
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';

// Screens
import MainScreen from './screens/mainScreen';
import OptionScreen from './screens/optionScreen';
import HospitalScreen from './screens/hospitalScreen';

const AuthedStack = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      title: 'cinesia',
      header: null
    }
  },
  Option: {
    screen: OptionScreen,
    navigationOptions: {
      title: 'cinesia',
      header: null
    }
  },
  Hospital: {
    screen: HospitalScreen,
    navigationOptions: {
      title: 'cinesia',
      header: null
    }
  }
}, {
  mode: 'card',
  initialRouteName: 'Main',
});

const MainStack = createSwitchNavigator({
  Validated: AuthedStack
},{
  initialRouteName: 'Validated',
});

export default MainStack;