import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

import { CATEGORIES } from '../data/dummy-data'

// components
import MealList from "../components/MealList";

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals)
    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    if (displayedMeals.length === 0) {
        return (
            <View style={styles.screen}>
                <Text>No meals found, maybe check your filters</Text>
            </View>
        )
    }
    return (
        <MealList displayedMeals={displayedMeals} navigation={props.navigation} />
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCategory.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen;