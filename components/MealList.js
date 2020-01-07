import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useSelector } from "react-redux";

const MealList = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    return (
        <View>
            {
                props.displayedMeals.map((l, i) => (
                    <ListItem
                        key={i}
                        leftAvatar={{ source: { uri: l.imageUrl } }}
                        title={l.title}
                        subtitle={`${l.affordability} | ${l.complexity} | ${l.duration}m`}
                        onPress={() => {
                            props.navigation.navigate('MealDetail', { mealId: l.id, mealTitle: l.title, isFav: favoriteMeals.some(meal => meal.id === l.id) })
                        }}
                        bottomDivider
                        chevron
                    />
                ))
            }
        </View>
    )
};

const styles = StyleSheet.create({

})

export default MealList;