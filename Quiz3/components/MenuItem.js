import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MenuItem({ name, price, onBuy }) {
  const [done, setDone] = useState(false);

  const handleBuy = () => {
    onBuy(name, price);
    setDone(true);
  };

  return (
    <View style={styles.item}>
      <View style={{flex:1}}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>Rp{price}</Text>
      </View>
      <Button title={done ? '✓' : 'Beli'} onPress={handleBuy} disabled={done}/>
    </View>
  );
}

const styles = StyleSheet.create({
  item: { flexDirection:'row', padding:10, alignItems:'center', borderBottomWidth:1 },
  name: { fontSize:16 },
  price: { fontSize:14, color:'gray' },
});
