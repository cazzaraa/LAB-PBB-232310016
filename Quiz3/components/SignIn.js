import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (email.includes('@student.ibik.ac.id') && password.length >= 4) {
      navigation.replace('Home', { user: email.split('@')[0] });
    } else {
      Alert.alert('Error', 'Gunakan email IBIK & password minimal 4 karakter.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email IBIK" style={styles.input} value={email} onChangeText={setEmail} autoCapitalize="none"/>
      <TextInput placeholder="Password" secureTextEntry style={styles.input} value={password} onChangeText={setPassword}/>
      <Button title="Masuk" onPress={handleSignIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', padding:20 },
  input: { borderWidth:1, padding:10, marginBottom:10, borderRadius:5 },
});
