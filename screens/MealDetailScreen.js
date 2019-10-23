import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Button } from 'react-native-elements';

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import { MEALS } from "../data/dummy-data";

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go Back to Categories" type="outline" onPress={() => {
                props.navigation.popToTop()
            }} />
        </View>
    )
}

MealDetailScreen.navigationOptions = navigationData => {
    return {
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favorite' iconName='favorite-border' style={styles.icon} onPress={() => { }} />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        marginHorizontal: 10
    }
})

export default MealDetailScreen;