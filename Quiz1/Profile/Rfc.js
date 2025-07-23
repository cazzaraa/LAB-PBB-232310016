import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const ProfileRFC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/group.png')} style={styles.avatar} />
        <Text style={styles.text}>Nama: Muhamad Rapi</Text>
        <Text style={styles.text}>NPM: 232310001</Text>
        <Text style={styles.text}>Jurusan: Teknik Informatika</Text>
        <Text style={styles.text}>Hobi: Permainan</Text>
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
    marginTop: 30,
  },
  profileContainer: {
    padding: 20,
    backgroundColor: '#ffffff', 
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ProfileRFC;
