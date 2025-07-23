
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ProfileRFC from './Profile/Rfc';
import ProfileRCC from './Prof/Rcc';
import RegistrationForm from './Prof/Regist';
import ColorButton from './Prof/Button';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ProfileRFC />
        <ProfileRCC />
        <RegistrationForm />
        <ColorButton />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
