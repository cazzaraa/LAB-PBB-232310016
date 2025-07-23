import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Halo, Selamat Datang di Kuis React Native!</Text>
      <Image
        source={require('../assets/boy.jpg')}  // Ganti dengan path ke boy.webp
        style={styles.image}
      />
      <Button
        title="Lihat Profil"
        onPress={() => navigation.navigate('ProfileScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default HomeScreen;
