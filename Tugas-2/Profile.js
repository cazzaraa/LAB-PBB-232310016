import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/profile.jpg')} 
        style={styles.image} 
      />
      <Text style={styles.name}>Nama: Cazzara</Text>
      <Text style={styles.email}>Email: cazzara@miauw.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc5d3'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  email: {
    fontSize: 16,
    color: 'gray'
  }
});