/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SplashScreen from './src/screens/SplashScreen';
import InitialLaunchScreen from './src/screens/InitialLaunchScreen';
import SingUpScreen1 from './src/screens/SingUpScreen1';
import SingUpScreen2 from './src/screens/SingUpScreen2';
import LoginScreen from './src/screens/LoginScreen';
const App= () => {
  return (
    <View style={styles.container}>
      <LoginScreen/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});

export default App;
