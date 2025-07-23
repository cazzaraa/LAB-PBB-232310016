import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      Alert.alert('Nilai maksimal tercapai');
    }
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Angka: {count}</Text>
      <Button title="+" onPress={increment} />
      <Button title="-" onPress={decrement} />
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
});

export default CounterApp;
