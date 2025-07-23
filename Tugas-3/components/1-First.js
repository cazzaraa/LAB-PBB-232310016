import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CenteredNode = () => {
  return (
    <View style={styles.container}>
      <View style={styles.node}>
        <Text style={styles.heading}>Azzahra K.Z.S</Text>
        <Image source={require('../assets/LOGO_IBIK.png')} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  node: {
    width: 300,
    height: 500,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

export default CenteredNode;
