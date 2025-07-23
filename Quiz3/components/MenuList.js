import React, { useState } from 'react';
import { ScrollView, Alert } from 'react-native';
import { menus } from '../data/menus';
import MenuItem from './MenuItem';

export default function MenuList() {
  const [cart, setCart] = useState([]);

  const handleBuy = (name, price) => {
    setCart([...cart, { name, price }]);
    Alert.alert('Berhasil', `${name} ditambahkan ke keranjang`);
  };

  return (
    <ScrollView>
      {menus.map(item => (
        <MenuItem key={item.id} {...item} onBuy={handleBuy} />
      ))}
    </ScrollView>
  );
}
