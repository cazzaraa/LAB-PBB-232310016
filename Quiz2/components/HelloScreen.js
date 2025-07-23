import React from 'react';
import { View, Text, Button, Alert, Image, StyleSheet } from 'react-native';

const HelloScreen = () => {
  const handlePress = () => {
    Alert.alert('Tombol berhasil ditekan!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Halo, Selamat Datang di Kuis React Native!</Text>
      <Image
        source={{ uri: 'https://example.com/your-image.png' }}
        style={styles.image}
      />
      <Button title="Klik Saya" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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

export default HelloScreen;
