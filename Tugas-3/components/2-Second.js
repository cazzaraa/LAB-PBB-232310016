import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RCCandRFC = () => {
  const [historyText, setHistoryText] = useState('History Bicycle');
  const [imageText, setImageText] = useState('Image Box');

  return (
    <View style={styles.container}>
      <View style={styles.rcc}>
        <Text style={styles.heading}>RCC and RFC Example</Text>
        <View style={styles.rfc}>
          <Text style={styles.rfcText}>{historyText}</Text>
          <Text style={styles.rfcText}>{imageText}</Text>
        </View>
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
  rcc: {
    width: 300,
    height: 500,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  rfc: {
    width: '80%',
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginTop: 10,
  },
  rfcText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default RCCandRFC;
