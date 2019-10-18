import React from 'react';
import { View, Text, StyleSheet } from "react-native";

import { Button } from 'react-native-elements';

import { CATEGORIES } from '../data/dummy-data'

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    return (
        <View style={styles.screen}>
            <Text>The Category meals Screen!</Text>
            <Text>{selectedCategory.title}</Text>
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