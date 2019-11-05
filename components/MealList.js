import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const MealList = props => {
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
                            props.navigation.navigate('MealDetail', { mealId: l.id })
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