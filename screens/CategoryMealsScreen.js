import React from 'react';
import { View, Text, StyleSheet, FlatList } from "react-native";

import { ListItem } from 'react-native-elements';

import { CATEGORIES, MEALS } from '../data/dummy-data'

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <View>
            {
                displayedMeals.map((l, i) => (
                    <ListItem
                        key={i}
                        leftAvatar={{ source: { uri: l.imageUrl } }}
                        title={l.title}
                        subtitle={`${l.affordability} | ${l.complexity} | ${l.duration}m`}
                        onPress={() => {
                            props.navigation.navigate('MealDetail', { mealId: l.id })
                        }}
                        bottomDivider
                        chevron
                    />
                ))
            }
        </View>
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