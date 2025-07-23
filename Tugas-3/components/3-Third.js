import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.splashContainer}>
      <View style={styles.splashContent}>
        <Image source={require('../assets/LOGO_IBIK.png')} style={styles.splashImage} />
        <Text style={styles.splashText}>Welcome to My App</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  splashContent: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  splashText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  splashImage: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});

export default SplashScreen;
