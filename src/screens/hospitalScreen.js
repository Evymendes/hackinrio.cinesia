import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { DrawerNavigator } from 'react-navigation'
import estrela from '../assets/estrela.png';

class HospitalScreen extends Component {
  state = {
    hospitals: [{
      name: 'Hospital Miguel Couto',
      address: 'Rua Mario Ribeiro, 117 - Leblon',
      rate: '4.8',
      distance: '10min',
      type: 'Público'
    }, {
      name: 'Hospital Copador',
      address: 'Rua Figueiredo de Magalhães, 875 - Copacabana',
      rate: '4.4',
      distance: '34min',
      type: 'Private'
    }, {
      name: 'Hospital Souza Aguiar',
      address: 'Praça da República, 111 - Centro',
      rate: '3.6',
      distance: '15min',
      type: 'Público'
    }, {
      name: 'Hospital Miguel Couto',
      address: 'Rua Mario Ribeiro, 117 - Leblon',
      rate: '2.3',
      distance: '20min',
      type: 'Público'
    } ]
  };

  renderHospitals = () => {
    return this.state.hospitals.map((hospital, index) => {
      return (
        <View
          key={index}
          style={styles.hospitalContainer}
        >
          <Text style={styles.title}>
            {hospital.name}
          </Text>
          <Text style={styles.subtitle}>
            {hospital.address}
          </Text>
          <View
            style={styles.specifications}
          >
            <View style={styles.rate}>
              <Text>{hospital.rate}</Text>
              <Image 
                style={styles.image}
                source={ estrela } 
              />
            </View>
            <Text>{hospital.distance}</Text>
            <Text>{hospital.type}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}> ir </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
      >
        { this.renderHospitals() }
      </ScrollView>
    );
  }
}

const styles = {  
  container:{
    flex: 1,
    marginTop: 23,
    backgroundColor: 'rgba(0, 193, 74, 0.05)'
  },
  hospitalContainer: {
    width: '100%',
    height: 154,
    padding: '10%',
    borderBottomWidth: 1,
    borderBottomColor: '#00C14A',
    backgroundColor: 'rgba(0, 193, 74, 0.05)'
  },
  title:{
    color: '#00C14A',
    fontSize: 21,
  },
  subtitle:{
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.35)',
  },
  specifications:{
    fontSize: 16,
    color: '#0F0F0F',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '3%',
  },
  rate:{
    flexDirection: 'row'
  },
  image: {
    width: 10,
    marginLeft: 3
  },
  button: {
    width: 40,
    height: 30,
    borderRadius: 3,
    backgroundColor: 'rgba(0, 193, 74, 0.20)'
  },
  buttonText:{
    marginTop: 5,
    textAlign: 'center',
  }
};

export default HospitalScreen;