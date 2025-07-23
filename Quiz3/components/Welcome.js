import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Welcome({ user }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selamat datang, {user}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding:20, backgroundColor:'#f8f8f8' },
  text: { fontSize:18, fontWeight:'bold' },
});
