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
import { ThemeProvider } from 'react-native-elements';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import MealsNavigator from "./navigation/MealsNavigator";
import mealsReducer from "./store/reducers/meals";

useScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
});
const store = createStore(rootReducer);

const theme = {
  Button: {
    raised: false
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <MealsNavigator theme="light" />
      </Provider>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({

});

export default App;
