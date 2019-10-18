import React from 'react';
import { View, Text, StyleSheet } from "react-native";

import { Button } from 'react-native-elements';

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Category meals Screen!</Text>
            <Button title="Go to Details" onPress={() => {
                props.navigation.navigate('MealDetail')
            }}
                type="outline"
            />
            <Button title="Go Back" onPress={() => {
                props.navigation.goBack()
            }}
                type="outline"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen;