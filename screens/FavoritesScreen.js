import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from "../components/HeaderButton";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return (
        <MealList displayedMeals={favMeals} navigation={props.navigation} />
    )
}

FavoritesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='menu' style={styles.headerBtn} onPress={() => {
                navData.navigation.toggleDrawer()
            }} />
        </HeaderButtons >
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerBtn: {
        paddingHorizontal: 15
    }
})

export default FavoritesScreen;