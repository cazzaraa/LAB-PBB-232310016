import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ColorButton = () => {
  const [color, setColor] = useState('blue'); 

 
  const handlePress = () => {
    if (color === 'blue') {
      setColor('red'); 
    } else {
      setColor('blue');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.box, { backgroundColor: color }]}
        onPress={handlePress}
      >
        <Text style={styles.text}>Klik Saya</Text>
      </TouchableOpacity>
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
  box: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center', 
    marginBottom: 20,
    borderRadius: 10,  
  },
  text: {
    color: '#fff',  
  },
});

export default ColorButton;
