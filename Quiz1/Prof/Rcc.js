import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

class ProfileRCC extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.profileContainer}>
          <Image source={require('../assets/group.png')} style={styles.avatar} />
          <Text style={styles.text}>Nama: Riyadh Smith</Text>
          <Text style={styles.text}>NPM: 232310040</Text>
          <Text style={styles.text}>Jurusan: Teknologi Informasi</Text>
          <Text style={styles.text}>Hobi: Musik</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  profileContainer: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
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

export default ProfileRCC;
