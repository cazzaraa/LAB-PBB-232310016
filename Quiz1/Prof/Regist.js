import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, SafeAreaView } from 'react-native';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nama Lengkap"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="No Telepon"
          value={phone}
          onChangeText={setPhone}
        />
        <Button title="Submit" onPress={handleSubmit} />

        {submitted && (
          <View style={styles.result}>
            <Text>Nama: {name}</Text>
            <Text>Email: {email}</Text>
            <Text>No Telepon: {phone}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4', 
  },
  formContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#ffffff', 
    borderRadius: 10,
    alignItems: 'center', 
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  result: {
    marginTop: 20,
  },
});

export default RegistrationForm;
