import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet, Card } from 'react-native';

const ListMahasiswa = () => {
  const [mahasiswa, setMahasiswa] = useState([
    { id: '1', name: 'Budi', npm: '12345678' },
    { id: '2', name: 'Siti', npm: '23456789' },
    { id: '3', name: 'Andi', npm: '34567890' },
    { id: '4', name: 'Joko', npm: '45678901' },
    { id: '5', name: 'Rina', npm: '56789012' },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={mahasiswa}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.npm}>NPM: {item.npm}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  npm: {
    fontSize: 16,
    color: 'gray',
  },
});

export default ListMahasiswa;
