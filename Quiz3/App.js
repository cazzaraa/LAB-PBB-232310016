import React from 'react';
import { StyleSheet } from 'react-native';
import SignIn from './components/SignIn';
import Welcome from './components/Welcome';
import MenuList from './components/MenuList';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown:false }} />
        <Stack.Screen name="Home" component={({ route }) => (
          <>
            <Welcome user={route.params.user} />
            <MenuList />
          </>
        )} options={{ title:'Kantin IBIK' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
