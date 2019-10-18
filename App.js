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

import { Button, ThemeProvider } from 'react-native-elements';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <ScrollView>
          <Button title="Hey!" />
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({

});

export default App;
