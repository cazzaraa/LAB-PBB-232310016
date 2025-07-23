import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import CenteredNode from './components/1-First';
import RCCandRFC from './components/2-Second';
import SplashScreen from './components/3-Third';
import MyBioPage from './components/4-Fourth';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <SplashScreen />
        <CenteredNode />
        <RCCandRFC />
        <MyBioPage />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingVertical: 20,
    alignItems: 'center',
  },
});
