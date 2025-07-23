import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validatePassword = (value) => {
    if (value.length < 3) {
      setPasswordError('Type minimum 3 character');
      return false;
    }
    if (
      !/[a-zA-Z]/.test(value) ||
      !/[0-9]/.test(value) ||
      !/[^a-zA-Z0-9]/.test(value)
    ) {
      setPasswordError('Value must contain alphabet, number and symbol');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleSignIn = () => {
    const isValid = validatePassword(password);

    if (isValid) {
      if (
        email === '232310040@student.ibik.ac.id' &&
        password === 'BESTstudent_2023'
      ) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Email/Password is not match');
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {passwordError ? (
        <Text style={styles.error}>{passwordError}</Text>
      ) : null}
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignInScreen;
