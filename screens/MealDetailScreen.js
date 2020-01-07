import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { Button, Text, Image, ListItem } from 'react-native-elements';

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { toggleFavorite } from "../store/actions/meals";

const MealDetailScreen = props => {
    const availableMeals = useSelector(state => state.meals.meals)
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    const dispatch = useDispatch();

    // useCallback to avoid infinite loop
    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId))
    }, [dispatch, mealId]);

    useEffect(() => {
        // props.navigation.setParams({ mealTitle: selectedMeal.title })
        props.navigation.setParams({ toggleFav: toggleFavoriteHandler })
    }, [toggleFavoriteHandler])

    return (
        <ScrollView>
            <View style={styles.screen}>
                <Image
                    source={{ uri: selectedMeal.imageUrl }}
                    style={styles.image}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <View style={styles.tags}>
                    <Text>{selectedMeal.affordability}</Text>
                    <Text>{selectedMeal.complexity}</Text>
                    <Text>{selectedMeal.duration}</Text>
                    {selectedMeal.isGlutenFree ? <Text>Gluten</Text> : <></>}
                    {selectedMeal.isVegan ? <Text>Vegi</Text> : <></>}
                    {selectedMeal.isVegetarian ? <Text>Vege</Text> : <></>}
                    {selectedMeal.isLactoseFree ? <Text>Lac</Text> : <></>}
                </View>
                <Text style={styles.title} h4>Ingredients</Text>
                {
                    selectedMeal.ingredients.map((ingredient, i) => (
                        <ListItem
                            key={i}
                            title={ingredient}
                            bottomDivider
                        />
                    ))
                }
                <Text style={styles.title} h4>Steps</Text>
                {
                    selectedMeal.steps.map((step, i) => (
                        <ListItem
                            key={i}
                            title={step}
                        />
                    ))
                }
                <Button title="Go Back to Categories" type="outline" onPress={() => {
                    props.navigation.popToTop()
                }} />
            </View>
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = navigationData => {
    const mealTitle = navigationData.navigation.getParam('mealTitle')
    // const mealId = navigationData.navigation.getParam('mealId');
    // const selectedMeal = MEALS.find(meal => meal.id === mealId);
    const toggleFavorite = navigationData.navigation.getParam('toggleFav')

    return {
        headerTitle: mealTitle,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favorite' iconName='favorite-border' style={styles.icon} onPress={toggleFavorite} />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
    },
    icon: {
        marginHorizontal: 10
    },
    image: {
        width: "100%",
        height: 200
    },
    title: {
        paddingTop: 10,
        paddingHorizontal: 10
    },
    tags: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10
    }
})

export default MealDetailScreen;