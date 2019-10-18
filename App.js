/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView
} from 'react-native';
import { useScreens } from 'react-native-screens'

import { Button, ThemeProvider } from 'react-native-elements';

import MealsNavigator from "./navigation/MealsNavigator";

useScreens();

const theme = {
  Button: {
    raised: false
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MealsNavigator theme="light" />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({

});

export default App;
