import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';

// Images
import animal from '../assets/animal.png';
import brain from '../assets/brain.png';
import acident from '../assets/acident.png';
import drilling from '../assets/drilling.png';
import chemestry from '../assets/chemestry.png';
import bleeding from '../assets/bleeding.png';
import fall from '../assets/fall.png';
import mouth from '../assets/mouth.png';

class OptionScreen extends Component {
  state = {
    acidentTypes: [{
      name: 'Acidente',
      icon: acident
    }, {
      name: 'Sangramento',
      icon: bleeding
    }, {
      name: 'Perfuração',
      icon: drilling
    }, {
      name: 'Aneurisma',
      icon: brain
    }, {
      name: 'Acidente químico',
      icon: chemestry
    }, {
      name: 'Queda',
      icon: fall
    }, {
      name: 'Ataque animal',
      icon: animal
    }, {
      name: 'Contaminação',
      icon: mouth
    }]
  };

  handleNavigationButton = () => {
    this.props.navigation.navigate('Hospital');
  }

  renderAcidents = () => {
    return this.state.acidentTypes.map((acidentType) => {
      return (
        <TouchableOpacity
          key={acidentType.name}
          onPress={this.handleNavigationButton}
          style={styles.button}
        >
          <Image 
            style={styles.image}
            source={acidentType.icon} 
          />
          <Text style={styles.buttonText}>
            {acidentType.name}
          </Text>
        </TouchableOpacity>
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
       {this.renderAcidents()}
      </View>
    );
  }
}

const styles = {  
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },  
  image:{
    width: '40%',
    height: '50%',
    margin: '3%',
    resizeMode: 'contain',
  },
  button: {
    width: '50%',    
    height: '25%',
    backgroundColor: '#CBF2DB',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#bdd0c5',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  }
};

export default OptionScreen;