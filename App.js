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

const theme = {
  Button: {
    raised: false
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
